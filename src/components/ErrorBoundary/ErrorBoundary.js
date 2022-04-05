import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: {} };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Opps, something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
