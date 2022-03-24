import PropTypes from "prop-types";

import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  min-height: 100vh;
  margin-top: 4.5rem;
`;

const ContentContainer = ({ children }) => <Container>{children}</Container>;

ContentContainer.propTypes = {
  children: PropTypes.node,
};

export default ContentContainer;
