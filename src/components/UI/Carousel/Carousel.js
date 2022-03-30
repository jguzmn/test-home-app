import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { range, first, last } from "lodash";
import { useState, useRef, useEffect } from "react";

import { MAIN_COLOR, GRAY_COLOR } from "constants/styles";
import { PREV_KEY, NEXT_KEY } from "constants/uiComponentsKeys";
import {
  XS_BREAK_POINT,
  SM_BREAK_POINT,
  MD_BREAK_POINT,
  LG_BREAK_POINT,
  XL_BREAK_POINT,
  XS_BREAK_POINT_PX,
} from "constants/styles";

import { FadeIn } from "utils/animations";
import useWindowDimensions from "utils/hooks/useWindowDimensions";

import { PreviousButton, NextButton } from "components/UI/ControlButtons";
import Grid from "components/Layout/Grid";
import Column from "components/Layout/Column";
import CarouselItem from "./CarouselItem";

const XS_SIZE_VISIBLE_ITEMS_NUMBER = 1;
const SM_SIZE_VISIBLE_ITEMS_NUMBER = 2;
const MD_SIZE_VISIBLE_ITEMS_NUMBER = 2;
const LG_SIZE_VISIBLE_ITEMS_NUMBER = 3;
const XL_SIZE_VISIBLE_ITEMS_NUMBER = 3;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  @media screen and (max-width: ${XS_BREAK_POINT_PX}) {
    padding: 0;
  }
`;

const CarouselColumn = styled(Column)`
  ${FadeIn}
  display: flex;
`;

const ItemsContainer = styled(Grid)`
  justify-content: center;
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

const getVisibleItemsNumber = (width) => {
  if (width <= XS_BREAK_POINT) return XS_SIZE_VISIBLE_ITEMS_NUMBER;
  if (width >= SM_BREAK_POINT && width < MD_BREAK_POINT)
    return SM_SIZE_VISIBLE_ITEMS_NUMBER;
  if (width >= MD_BREAK_POINT && width < LG_BREAK_POINT)
    return MD_SIZE_VISIBLE_ITEMS_NUMBER;
  if (width >= LG_BREAK_POINT && width < XL_BREAK_POINT)
    return LG_SIZE_VISIBLE_ITEMS_NUMBER;
  if (width >= XL_BREAK_POINT) return XL_SIZE_VISIBLE_ITEMS_NUMBER;
};

const Carousel = ({ items }) => {
  const { width } = useWindowDimensions();
  const visibleItemsNumber = useRef(getVisibleItemsNumber(width));

  const [visibleItemsIndexes, setVisibleItemsIndexes] = useState(
    range(visibleItemsNumber.current)
  );

  useEffect(() => {
    visibleItemsNumber.current = getVisibleItemsNumber(width);
    setVisibleItemsIndexes(range(visibleItemsNumber.current));
  }, [width]);

  const removeInitialElement = (array) => [...array.slice(1)];

  const removeLastElement = (array) => [...array.slice(0, -1)];

  const moveCarousel = (key) =>
    setVisibleItemsIndexes((prevVisibleItems) => {
      if (key === PREV_KEY && first(prevVisibleItems) === 0)
        return [items.length - 1, ...removeLastElement(prevVisibleItems)];
      if (key === NEXT_KEY && last(prevVisibleItems) === items.length - 1)
        return [...removeInitialElement(prevVisibleItems), 0];
      return key === NEXT_KEY
        ? [
            ...removeInitialElement(prevVisibleItems),
            last(prevVisibleItems) + 1,
          ]
        : [first(prevVisibleItems) - 1, ...removeLastElement(prevVisibleItems)];
    });

  return (
    <CarouselContainer>
      <PrevBtn handleClick={() => moveCarousel(PREV_KEY)} />
      <ItemsContainer
        xs={XS_SIZE_VISIBLE_ITEMS_NUMBER}
        sm={SM_SIZE_VISIBLE_ITEMS_NUMBER}
        md={MD_SIZE_VISIBLE_ITEMS_NUMBER}
        lg={LG_SIZE_VISIBLE_ITEMS_NUMBER}
        xl={XL_SIZE_VISIBLE_ITEMS_NUMBER}
      >
        {visibleItemsIndexes.map((visibleItemIndex) => {
          const { id, data: itemData } = items[visibleItemIndex];
          return (
            <CarouselColumn key={id}>
              <CarouselItem
                src={itemData?.main_image?.url}
                alt={itemData?.main_image?.alt}
                label={itemData.name}
              ></CarouselItem>
            </CarouselColumn>
          );
        })}
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
