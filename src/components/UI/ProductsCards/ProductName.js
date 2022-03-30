import styled from "styled-components";

import {
  MAIN_COLOR,
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
} from "constants/styles";

const ProductName = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-self: center;

  color: ${MAIN_COLOR};
  font-size: 1.5rem;
  font-weight: 800;

  padding: 0.75rem 1rem;
  line-height: 1.25;
  transition: all 0.25s ease;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    font-size: 1rem;
    padding: 0.25rem 0rem;
  }

  @media only screen and (min-width: ${SM_BREAK_POINT_PX}) {
    font-size: 1.2rem;
    padding: 0.25rem;
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    font-size: 1.25rem;
    padding: 0.5rem;
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    font-size: 1.3rem;
    padding: 0.75rem 0.5rem;
  }

  @media only screen and (min-width: ${XL_BREAK_POINT_PX}) {
    font-size: 1.5rem;
    padding: 0.75rem 1rem;
  }
`;

export default ProductName;
