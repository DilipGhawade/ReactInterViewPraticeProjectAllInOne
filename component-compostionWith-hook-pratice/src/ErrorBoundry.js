import { Component } from "react";

class ErrorBoundry extends Component {
  state = { haseError: false };

  static getDerievedStateFromProps(error) {
    return { haseError: true };
  }

  render() {
    if (this.haseError) {
      return <h1>Something Went Wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
