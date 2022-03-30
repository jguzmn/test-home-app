import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import { GRAY_COLOR, MAIN_COLOR } from "constants/styles";

const Icon = styled(FontAwesomeIcon)`
  transition: color 250ms ease-in-out;
`;

const ShopItems = styled.span`
  color: ${GRAY_COLOR};

  padding: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

const ShoppingIconContainer = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${Icon}, &:hover ${ShopItems} {
    color: ${MAIN_COLOR};
  }
`;

const handleClick = () => {};

const ShoppingIcon = () => (
  <ShoppingIconContainer>
    <Icon
      icon={faCartShopping}
      onClick={handleClick}
      size="lg"
      color={GRAY_COLOR}
    />
    <ShopItems>0</ShopItems>
  </ShoppingIconContainer>
);

export default ShoppingIcon;
