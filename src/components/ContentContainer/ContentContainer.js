import PropTypes from "prop-types";

import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0);
  min-height: 100vh;
  margin-top: 4.5rem;
  padding: 0 8rem;
`;

const ContentContainer = ({ children }) => <Container>{children}</Container>;

ContentContainer.propTypes = {
  children: PropTypes.node,
};

export default ContentContainer;
