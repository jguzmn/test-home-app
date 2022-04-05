import styled, { css } from "styled-components";

import { MAIN_COLOR } from "constants/styles";
import elementTypes from "constants/elementTypes";

import {
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
} from "constants/styles";

const mainTitleStyles = css`
  color: ${MAIN_COLOR};
  font-size: 3rem;
  margin: 1rem 0rem;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    font-size: 1.8rem;
    margin: 0.5rem 1rem;
  }

  @media only screen and (min-width: ${SM_BREAK_POINT_PX}) {
    font-size: 2rem;
    margin: 0.5rem 1rem;
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${XL_BREAK_POINT_PX}) {
    font-size: 3rem;
  }
`;

const titleStyles = {
  [elementTypes.main]: mainTitleStyles,
};

const MainTitle = styled.h2`
  cursor: default;
  font-weight: bold;

  ${({ type }) => titleStyles[type]}

  letter-spacing: -0.9px;
`;

export default MainTitle;
