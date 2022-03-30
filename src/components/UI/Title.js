import styled, { css } from "styled-components";

import { MAIN_COLOR } from "constants/styles";
import elementTypes from "constants/elementTypes";

const mainTitleStyles = css`
  color: ${MAIN_COLOR};
  font-size: 3rem;
`;

const titleStyles = {
  [elementTypes.main]: mainTitleStyles,
};

const MainTitle = styled.h2`
  cursor: default;
  font-weight: bold;

  ${({ type }) => titleStyles[type]}

  letter-spacing: -0.9px;
  margin: 1rem 0rem;
`;

export default MainTitle;
