// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("Error caught in ErrorBoundary:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2 className="text-red-600 text-center mt-10">Something went wrong while loading progress data.</h2>;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
