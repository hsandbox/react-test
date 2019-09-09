// Error Boundary
// https://ja.reactjs.org/docs/error-boundaries.html

import * as React from "react";

// クラスコンポーネントに、ライフサイクルメソッドの static getDerivedStateFromError() か
// componentDidCatch() のいずれか (または両方) を定義すると、Error boundary になる。
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    // Your can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // Your can render any custom fallback UI
      return <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}

export class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return <button onClick={this.handleClick}>{this.state.counter}</button>;
  }
}
