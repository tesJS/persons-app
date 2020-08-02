import React, { Component } from 'react';
import Counter from './counter';
import { timers } from 'jquery';

class Counters extends Component {
  state = {
    counters: [
      { id: 'aedk1', name: 'Chebude', age: 45 },
      { id: 'mkf4', name: 'Kelbesa', age: 56 },
      { id: 'ddjj7', name: 'Abera', age: 18 },
      { id: 'mkkkk8', name: 'Chala', age: 24 },
    ],
  };

  persons = [...this.state.counters];

  nameChangedHandler(counterId, event) {
    let counters = [...this.state.counters];
    let index = counters.findIndex(person => {
      return person.id === counterId;
    });
    const p = counters[index];
    p.name = event.target.value;

    this.setState({ counters: counters });
  }

  render() {
    return (
      <div>
        {this.state.counters.map(c => (
          <div key={c.id}>
            <Counter
              name={c.name}
              age={c.age}
              changed={event => this.nameChangedHandler(c.id, event)}
            />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;

{
  /* <button
          className='btn btn-warning btn-sm m-2'
          onClick={() => this.handleReset()}
        >
          Reset
        </button>
        <br></br>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))} */
}
