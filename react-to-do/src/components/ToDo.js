import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete }/>
        <span>{ this.props.description }</span>
        <input type="checkbox" checked={ this.props.toDelete } onChange={ this.props.toggleDelete }/>
        <span>Delete?</span>
      </li>
    );
  }
}

export default ToDo;
