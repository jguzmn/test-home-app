import styled from "styled-components";

import {
  MAIN_COLOR,
  SECONDARY_COLOR,
  COMPLEMENTARY_COLOR,
} from "constants/styles";

import {
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
} from "constants/styles";

const SquaredLabel = styled.span`
  cursor: default;

  /* Text Style */
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.3px;

  /* Box shape */
  padding: 0.25rem 1.25rem;
  background-image: linear-gradient(180deg, ${SECONDARY_COLOR}, ${MAIN_COLOR});
  border: 0.5px solid ${COMPLEMENTARY_COLOR};
  border-radius: 2px;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    font-size: 0.9rem;
  }

  @media only screen and (min-width: ${SM_BREAK_POINT_PX}) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${XL_BREAK_POINT_PX}) {
    font-size: 1.5rem;
  }
`;

export default SquaredLabel;
