import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <div>
        <button>+</button>
        <span>{this.state.number}</span>
        <button>-</button>
      </div>
    );
  }
}