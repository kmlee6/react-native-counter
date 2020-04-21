import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  componentDidUpdate(_, prevState) {
    const different = this.state.number - prevState.number;
    if (different) {
      this.props.onCalculate(different);
    }
  }

  componentWillUnmount() {
    this.props.onCalculate(-1 * this.state.number);
  }

  onIncrease = () => {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  };

  onDeduct = () => {
    this.setState((prevState) => ({ number: prevState.number - 1 }));
  };

  render() {
    const { index } = this.props;
    return (
      <div>
        <span>{index}</span>
        <button onClick={this.onIncrease}>+</button>
        <span>{this.state.number}</span>
        <button onClick={this.onDeduct}>-</button>
      </div>
    );
  }
}

export default Counter;
