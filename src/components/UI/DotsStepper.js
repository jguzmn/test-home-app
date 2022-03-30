import { noop } from "lodash";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import {
  MAIN_COLOR,
  COMPLEMENTARY_COLOR,
  XS_BREAK_POINT_PX,
} from "constants/styles";

const ActiveStateStyle = css`
  cursor: pointer;
  background-color: ${MAIN_COLOR};
  border: 0.5px solid ${COMPLEMENTARY_COLOR};
`;

const DotsStepperContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 1rem;
  width: 100%;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    bottom: 0.3rem;
  }
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

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    height: 0.75rem;
    width: 0.75rem;
  }
`;

const DotsStepper = ({ items, selectedItemIndex, handleClick = noop }) => (
  <DotsStepperContainer>
    {items.map(({ id }, index) => (
      <DotStep
        key={id}
        isSelected={index === selectedItemIndex}
        onClick={() => handleClick(index)}
      ></DotStep>
    ))}
  </DotsStepperContainer>
);

DotsStepper.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
  selectedItemIndex: PropTypes.number,
  handleClick: PropTypes.func,
};

export default DotsStepper;
