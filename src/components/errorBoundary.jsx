// src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    // You can log error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
        Something went wrong.
      </h2>;
    }
    
    return this.props.children; 
  }
}

export default ErrorBoundary;
