import PropTypes from "prop-types";
import { noop } from "lodash";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons";

import {
  MAIN_COLOR,
  SECONDARY_COLOR,
  LIGHT_COLOR,
  GRAY_COLOR,
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
} from "constants/styles";
import { FadeIn } from "utils/animations";

const borderRadiusStyle = css`
  border-radius: 5px;
`;

const ShopIcon = styled(FontAwesomeIcon)`
  display: flex;

  ${FadeIn}
`;

const AddToCartIcon = styled(FontAwesomeIcon)`
  display: none;

  ${FadeIn}
`;

const IconContainer = styled.span`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 1px solid ${MAIN_COLOR};
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${SECONDARY_COLOR};
  color: white;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    font-size: 0.9rem;
  }

  @media only screen and (min-width: ${SM_BREAK_POINT_PX}) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: ${XL_BREAK_POINT_PX}) {
    font-size: 1.3rem;
  }
`;

const LabelContainer = styled.span`
  ${borderRadiusStyle}
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0rem 1rem;
  background: white;

  font-weight: bold;
  color: ${GRAY_COLOR};
  transition: all 0.5s ease;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    font-size: 0.9rem;
    padding: 0rem 0.5rem;
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    font-size: 0.95rem;
    padding: 0rem 0.75rem;
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  align-items: stretch;

  padding: 0px;
  position: relative;
  border: 1px solid ${MAIN_COLOR};
  margin: 0.5rem 0rem;

  font-size: 1rem;
  transition: all 0.25s ease;

  ${borderRadiusStyle}

  &:hover {
    ${LabelContainer} {
      background: ${LIGHT_COLOR};
      color: black;
    }

    & ${IconContainer} {
      ${ShopIcon} {
        display: none;
      }

      ${AddToCartIcon} {
        display: flex;
      }
    }
  }
`;

const Button = ({ className, children, label, handleClick = noop }) => {
  return (
    <StyledButton className={className} onClick={handleClick}>
      <IconContainer>
        <ShopIcon icon={faCartShopping} />
        <AddToCartIcon icon={faCartPlus} />
      </IconContainer>
      <LabelContainer>{label}</LabelContainer>
      {children}
    </StyledButton>
  );
};

/*
  The className and children properties were added so the user can externally modify the styles using styled components.
*/

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
