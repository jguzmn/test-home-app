import PropTypes from "prop-types";

import styled from "styled-components";

import {
  XS_BREAK_POINT_PX,
  SM_BREAK_POINT_PX,
  MD_BREAK_POINT_PX,
  LG_BREAK_POINT_PX,
  XL_BREAK_POINT_PX,
  XXL_BREAK_POINT_PX,
} from "constants/styles";

const Container = styled.div`
  --base-padding: 2rem;

  background-color: rgba(0, 0, 0, 0);
  min-height: 100vh;
  margin-top: 4.5rem;
  padding: 0 8rem;

  @media only screen and (max-width: ${XS_BREAK_POINT_PX}) {
    & {
      padding: 0;
    }
  }
  @media only screen and (min-width: ${SM_BREAK_POINT_PX}) {
    & {
      padding: 0 var(--base-padding);
    }
  }

  @media only screen and (min-width: ${MD_BREAK_POINT_PX}) {
    & {
      padding: 0 calc(var(--base-padding) * 2);
    }
  }

  @media only screen and (min-width: ${LG_BREAK_POINT_PX}) {
    & {
      padding: 0 calc(var(--base-padding) * 3);
    }
  }

  @media only screen and (min-width: ${XL_BREAK_POINT_PX}) {
    & {
      padding: 0 calc(var(--base-padding) * 3.25);
    }
  }

  @media only screen and (min-width: ${XXL_BREAK_POINT_PX}) {
    & {
      padding: 0 calc(var(--base-padding) * 4);
    }
  }
`;

const ContentContainer = ({ children }) => <Container>{children}</Container>;

ContentContainer.propTypes = {
  children: PropTypes.node,
};

export default ContentContainer;
