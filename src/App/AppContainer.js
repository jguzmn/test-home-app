import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppContainer = ({ children }) => <Container>{children}</Container>;

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
