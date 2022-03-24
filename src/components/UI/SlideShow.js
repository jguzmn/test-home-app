import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { toNumber } from "lodash";
import styled, { css } from "styled-components";

import { MAIN_COLOR, COMPLEMENTARY_COLOR } from "constants/styles";

import { PreviousButton, NextButton } from "./ControlButtons";

const PREV_KEY = "prev";
const NEXT_KEY = "next";

const ActiveStateStyle = css`
  background-color: ${MAIN_COLOR};
  cursor: pointer;
`;

const FadeAnimation = css`
  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: fade;
  animation-duration: 1s;
`;

const SlideShowContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
`;

const SlideShowItem = styled.div`
  ${FadeAnimation}
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
`;

const SlideShowItemImage = styled.img`
  width: 100%;
`;

const SlideShowItemTitle = styled.span`
  cursor: default;

  /* Text Style */
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  text-align: center;
  letter-spacing: -0.3px;

  /* Positon */
  padding: 0.25rem 1.25rem;
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translate(-50%, 0);

  /* Box shape */
  background-color: ${MAIN_COLOR};
  border: 0.5px solid ${COMPLEMENTARY_COLOR};
  border-radius: 2px;
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

const DotsStepperContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 1rem;
  width: 100%;
`;

const DotStep = styled.span`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  margin: 0 0.25rem;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover {
    ${ActiveStateStyle}
  }

  ${({ isSelected }) => isSelected && ActiveStateStyle}
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
        <SlideShowItem key={id} isSelected={isItemSelected(index)}>
          <SlideShowItemImage
            src={itemData?.main_image?.url}
            alt={itemData?.main_image?.alt}
          />
          {showTitle && (
            <SlideShowItemTitle>{itemData.title}</SlideShowItemTitle>
          )}
        </SlideShowItem>
      ))}
      <PrevBtn handleClick={() => moveSlideShow(PREV_KEY)} />
      <NextBtn handleClick={() => moveSlideShow(NEXT_KEY)} />
      <DotsStepperContainer>
        {items.map(({ id }, index) => (
          <DotStep
            key={id}
            isSelected={isItemSelected(index)}
            onClick={() => setSelectedItemIndex(index)}
          ></DotStep>
        ))}
      </DotsStepperContainer>
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
