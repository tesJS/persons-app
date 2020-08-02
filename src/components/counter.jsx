import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        {console.log(this)}
        <span className='badge m-2'>
          My name is {this.props.name}. I am {this.props.age} years old.
        </span>
        <br />
        <input
          type='input'
          className=' m-2'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

export default Counter;
