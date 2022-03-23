import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import { GRAY_COLOR, MAIN_COLOR } from "constants/styles";

const Icon = styled(FontAwesomeIcon)`
  transition: color 250ms ease-in-out;
`;

const ShoppingIconContainer = styled.div`
  padding: 1rem;
  cursor: pointer;

  &:hover ${Icon} {
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
  </ShoppingIconContainer>
);

export default ShoppingIcon;
