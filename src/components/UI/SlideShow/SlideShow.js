import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { toNumber } from "lodash";
import styled, { css } from "styled-components";

import { PREV_KEY, NEXT_KEY } from "constants/uiComponentsKeys";
import {
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
} from "constants/styles";

import { PreviousButton, NextButton } from "../ControlButtons";

import SlideShowItem from "./SlideShowItem";
import DotsStepper from "./../DotsStepper";

const SlideShowContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  margin-bottom: 1.5rem;
`;

const ControlSlideShowButtonStyles = css`
  /* Positon */
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  padding: 2rem;
  margin-top: -1rem;

  /* Font setup */
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
  transition: 0.6s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media screen and (max-width: ${XS_BREAK_POINT_PX}) {
    font-size: 1.5rem;
    padding: 0.75rem;
    margin-top: 0rem;
  }

  @media screen and (min-width: ${SM_BREAK_POINT_PX}) {
    font-size: 2rem;
    padding: 1rem;
    margin-top: -0.5rem;
  }

  @media screen and (min-width: ${LG_BREAK_POINT_PX}) {
    font-size: 2.5rem;
    padding: 2rem;
    margin-top: -1rem;
  }
`;

const PrevBtn = styled(PreviousButton)`
  ${ControlSlideShowButtonStyles}
  left: 0;
  border-radius: 0 3px 3px 0;
`;

const NextBtn = styled(NextButton)`
  ${ControlSlideShowButtonStyles}
  right: 0;
  border-radius: 3px 0 0 3px;
`;

const SlideShow = ({
  items = [],
  defaultSelected = 0,
  showTitle = false,
  autoMoveSlideShow = false,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(
    toNumber(defaultSelected)
  );

  const isItemSelected = (itemIndex) => itemIndex === selectedItemIndex;

  const moveSlideShow = useCallback(
    (key) => {
      setSelectedItemIndex((currentIndex) => {
        if (key === PREV_KEY)
          return (currentIndex - 1 + items.length) % items.length;
        if (key === NEXT_KEY) return (currentIndex + 1) % items.length;
      });
    },
    [setSelectedItemIndex, items]
  );

  useEffect(() => {
    if (autoMoveSlideShow) {
      const interval = setInterval(() => {
        moveSlideShow(NEXT_KEY);
      }, 20000);
      return () => clearInterval(interval);
    }
  }, [autoMoveSlideShow, moveSlideShow]);

  return (
    <SlideShowContainer>
      {items.map(({ id, data: itemData }, index) => (
        <SlideShowItem
          key={id}
          isSelected={isItemSelected(index)}
          src={itemData?.main_image?.url}
          alt={itemData?.main_image?.alt}
          showLabel={showTitle}
          label={itemData.title}
        ></SlideShowItem>
      ))}
      <PrevBtn handleClick={() => moveSlideShow(PREV_KEY)} />
      <NextBtn handleClick={() => moveSlideShow(NEXT_KEY)} />
      <DotsStepper
        items={items}
        selectedItemIndex={selectedItemIndex}
        handleClick={setSelectedItemIndex}
      />
    </SlideShowContainer>
  );
};

SlideShow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.array,
        main_image: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
  defaultSelected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showTitle: PropTypes.bool,
  autoMoveSlideShow: PropTypes.bool,
};

export default SlideShow;
