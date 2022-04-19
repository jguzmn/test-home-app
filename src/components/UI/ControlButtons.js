import PropTypes from "prop-types";
import { noop } from "lodash";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ControlButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  user-select: none;
  text-decoration: none;

  /* Positon */
  width: auto;

  /* Font setup */
  color: white;
  font-weight: bold;
  font-size: 1rem;
  transition: 0.6s ease;
`;

const PreviousButton = ({ className, children, handleClick = noop }) => (
  <ControlButton
    className={className}
    icon={faChevronLeft}
    onClick={handleClick}
  >
    {children}
  </ControlButton>
);
PreviousButton.propTypes = {
  handleClick: PropTypes.func,
};

const NextButton = ({ className, children, handleClick = noop }) => (
  <ControlButton
    className={className}
    icon={faChevronRight}
    onClick={handleClick}
  >
    {children}
  </ControlButton>
);

NextButton.propTypes = {
  handleClick: PropTypes.func,
};

export { PreviousButton, NextButton };
