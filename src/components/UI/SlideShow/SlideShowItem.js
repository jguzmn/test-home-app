import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { XS_BREAK_POINT_PX } from "constants/styles";

import SquaredLabel from "./../SquaredLabel";

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

const ItemContainer = styled.div`
  ${FadeAnimation}
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
`;

const ItemImage = styled.img`
  width: 100%;
  display: flex;
`;

const ItemTitle = styled(SquaredLabel)`
  /* Positon */
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translate(-50%, 0);

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    bottom: 2rem;
  }
`;

const SlideShowItem = ({
  isSelected,
  src,
  alt = "",
  showLabel = false,
  label = "",
}) => (
  <ItemContainer isSelected={isSelected}>
    <ItemImage src={src} alt={alt} />
    {showLabel && <ItemTitle>{label}</ItemTitle>}
  </ItemContainer>
);

SlideShowItem.propTypes = {
  isSelected: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  showLabel: PropTypes.bool,
  label: PropTypes.string,
};

export default SlideShowItem;
