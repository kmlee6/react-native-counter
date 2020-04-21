import React, { Component } from "react";
import Counter from "./Counter";
import { INIT_COUNTERS_SIZE } from "../constants/constants";

class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: INIT_COUNTERS_SIZE,
      sum: 0,
    };
  }

  handleNumberUpdate = (diff) => {
    this.setState((state) => ({
      sum: state.sum + diff,
    }));
  };

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
    const { size, sum } = this.state;
    let counters = this.initArray(size);
    return (
      <div>
        <fieldset>
          <p>sum of all counters value is {sum}</p>

          <form>
            <input onChange={this.onChange} type="text" value={size} />
          </form>
        </fieldset>
        {counters.map((counter, index) => (
          <Counter
            key={counter}
            index={index}
            onCalculate={this.handleNumberUpdate}
          />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
