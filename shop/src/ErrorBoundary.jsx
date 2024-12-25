import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error details (you can log to an error tracking service like Sentry)
    this.setState({ error, info });
    console.error("Error:", error);
    console.error("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
          }}
        >
          <h2>Something went wrong!</h2>
          <p>{this.state.error?.message}</p>
          <p>We are working on fixing it.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
