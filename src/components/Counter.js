import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  onIncrease = () => {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  };

  onDeduct = () => {
    this.setState((prevState) => ({ number: prevState.number - 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrease}>+</button>
        <span>{this.state.number}</span>
        <button onClick={this.onDeduct}>-</button>
      </div>
    );
  }
}

export default Counter;
