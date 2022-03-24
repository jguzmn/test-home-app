import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { toNumber } from "lodash";
import styled, { css } from "styled-components";

import { PREV_KEY, NEXT_KEY } from "constants/uiComponentsKeys";

import { PreviousButton, NextButton } from "../ControlButtons";

import SlideShowItem from "./SlideShowItem";
import DotsStepper from "./../DotsStepper";

const SlideShowContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
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

  const moveSlideShow = (key) => {
    setSelectedItemIndex((prevIndex) => {
      if (key === PREV_KEY && prevIndex === 0) return items.length - 1;
      if (key === NEXT_KEY && prevIndex === items.length - 1) return 0;
      return key === NEXT_KEY ? prevIndex + 1 : prevIndex - 1;
    });
  };

  useEffect(() => {
    if (autoMoveSlideShow) {
      const interval = setInterval(() => {
        moveSlideShow(NEXT_KEY);
      }, 20000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
