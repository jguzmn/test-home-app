import styled from "styled-components";

import { MAIN_COLOR } from "constants/styles";

const FooterContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
  background-color: ${MAIN_COLOR};
  padding: 2rem 8rem;
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
