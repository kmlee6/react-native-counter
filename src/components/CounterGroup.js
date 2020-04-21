import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 2,
    };
  }

  initArray = (size) => {
    const array = Array.from(Array(size).keys());
    return array;
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      size: value.length > 0 ? parseInt(value) : 0,
    });
  };

  render() {
    let counters = this.initArray(this.state.size);
    return (
      <div>
        <form>
          <input onChange={this.onChange} type="text" value={this.state.size} />
        </form>
        {counters.map((counter) => (
          <Counter />
        ))}
      </div>
    );
  }
}

export default CounterGroup;