import styled, { css } from "styled-components";

import {
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
} from "constants/styles";

const verticalAlignCenter = css`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

const HeaderContainer = styled.nav`
  padding: 0rem 8rem;
  background: white;
  justify-content: space-between;
  min-height: 4.5rem;
  border-bottom: 0.5px rgb(211 211 211 / 60%) solid;
  box-shadow: 1px 1px 20px 1px rgb(68 68 68 / 5%);
  ${verticalAlignCenter};

  width: -webkit-fill-available;
  position: fixed;
  overflow: hidden;
  z-index: 5;
  top: 0px;
  left: 0px;
  right: 0px;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    & {
      padding: 0;
    }
  }

  @media only screen and (min-width: ${SM_BREAK_POINT_PX}) {
    & {
      padding: 0 1rem;
    }
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    & {
      padding: 0 2rem;
    }
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    & {
      padding: 0 4rem;
    }
  }

  @media only screen and (min-width: ${XL_BREAK_POINT_PX}) {
    & {
      padding: 0 6rem;
    }
  }
`;

export default HeaderContainer;
