import styled from "styled-components";

import {
  MAIN_COLOR,
  COMPLEMENTARY_COLOR,
  SECONDARY_COLOR,
} from "constants/styles";

import BaseButton from "./BaseButton";

const MainButton = styled(BaseButton)`
  color: ${COMPLEMENTARY_COLOR};
  background-color: ${SECONDARY_COLOR};
  border: 1px solid ${MAIN_COLOR};
  transition: all 0.25s ease;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
    background-color: ${MAIN_COLOR};
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.08);
  }
`;

export { MainButton };
