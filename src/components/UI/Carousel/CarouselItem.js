import PropTypes from "prop-types";
import styled from "styled-components";
import { noop } from "lodash";

import SquaredLabel from "./../SquaredLabel";

const ItemImage = styled.img`
  width: 100%;
  display: flex;
  transition: opacity 0.5s ease;
  border-radius: 5px;
`;

const ItemLabel = styled(SquaredLabel)`
  cursor: pointer;
  width: max-content;
  max-width: 80%;
  /* Positon */
  position: absolute;
  bottom: 2rem;
  font-size: 1.2rem;
  /* Center Item */
  left: 50%;
  transform: translate(-50%, 0);
  transition: transform 0.5s ease;
`;

const ItemOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* Position */
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: 2rem;
  /* Animation */
  opacity: 0;
  transition: 0.5s ease;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

const ItemContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0rem;
  position: relative;
  opacity: 1;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:hover ${ItemImage} {
    opacity: 0.7;
  }

  &:hover ${ItemOverlay} {
    opacity: 1;
  }
`;

const CarouselItem = ({
  src = "",
  alt = "",
  label = "",
  handleClick = noop,
}) => (
  <ItemContainer onClick={handleClick}>
    <ItemImage src={src} alt={alt} />
    <ItemOverlay>
      <ItemLabel>{label.toLocaleUpperCase()}</ItemLabel>
    </ItemOverlay>
  </ItemContainer>
);

CarouselItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
};

export default CarouselItem;
