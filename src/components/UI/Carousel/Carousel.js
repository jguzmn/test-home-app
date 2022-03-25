import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

import { MAIN_COLOR, GRAY_COLOR } from "constants/styles";
import { PREV_KEY, NEXT_KEY } from "constants/uiComponentsKeys";
import { PreviousButton, NextButton } from "components/UI/ControlButtons";

import { FadeIn } from "utils/animations";

import Grid from "components/Layout/Grid";
import Column from "components/Layout/Column";
import CarouselItem from "./CarouselItem";

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

const CarouselColumn = styled(Column)`
  ${FadeIn}
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
`;

const ItemsContainer = styled(Grid)`
  display: flex;
`;

const CommonControlStyles = css`
  display: flex;

  color: ${GRAY_COLOR};
  font-size: 2rem;
  padding: 1rem;
  max-width: 3rem;

  &:hover {
    color: ${MAIN_COLOR};
  }
`;

const PrevBtn = styled(PreviousButton)`
  ${CommonControlStyles}
`;

const NextBtn = styled(NextButton)`
  ${CommonControlStyles}
`;

const Carousel = ({ items, visibleItemsNumber = 3 }) => {
  const [visibleItemsIndexes, setVisibleItemsIndexes] = useState({
    initial: 0,
    final: visibleItemsNumber - 1,
  });

  const shoudlShowColumn = (index) =>
    index >= visibleItemsIndexes.initial && index <= visibleItemsIndexes.final;

  const moveCarousel = (key) =>
    setVisibleItemsIndexes(({ initial, final }) => {
      if (key === PREV_KEY && initial === 0)
        return {
          initial: items.length - visibleItemsNumber,
          final: items.length - 1,
        };
      if (key === NEXT_KEY && final === items.length - 1)
        return {
          initial: 0,
          final: visibleItemsNumber - 1,
        };
      return key === NEXT_KEY
        ? {
            initial: initial + 1,
            final: final + 1,
          }
        : {
            initial: initial - 1,
            final: final - 1,
          };
    });

  return (
    <CarouselContainer>
      <PrevBtn handleClick={() => moveCarousel(PREV_KEY)} />
      <ItemsContainer itemsPerColumn={visibleItemsNumber}>
        {items.map(({ id, data: itemData }, index) => (
          <CarouselColumn key={id} isVisible={shoudlShowColumn(index)}>
            <CarouselItem
              src={itemData?.main_image?.url}
              alt={itemData?.main_image?.alt}
              label={itemData.name}
            ></CarouselItem>
          </CarouselColumn>
        ))}
      </ItemsContainer>
      <NextBtn handleClick={() => moveCarousel(NEXT_KEY)} />
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.shape({
        name: PropTypes.string,
        main_image: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
};

export default Carousel;
