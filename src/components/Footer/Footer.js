import styled from "styled-components";

import { MAIN_COLOR } from "constants/styles";

import {
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
} from "constants/styles";

const FooterContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
  background-color: ${MAIN_COLOR};
  padding: 2rem 8rem;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    & {
      padding: 1rem 2rem;
    }
  }

  @media only screen and (min-width: ${SM_BREAK_POINT_PX}) {
    & {
      padding: 1rem 2rem;
    }
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    & {
      padding: 1rem 4rem;
    }
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    & {
      padding: 1rem 6rem;
    }
  }

  @media only screen and (min-width: ${XL_BREAK_POINT_PX}) {
    & {
      padding: 1rem 8rem;
    }
  }
`;

const FooterText = styled.span`
  font-family: Times, "Times New Roman";
  color: white;
  padding-left: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Ecommerce created during Wizeline's Academy React Bootcamp ®
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
