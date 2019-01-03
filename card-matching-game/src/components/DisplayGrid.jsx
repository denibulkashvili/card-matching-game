import React, { Component } from 'react';
import Card from './CardReusable';

export default class DisplayGrid extends Component {

  render() {
    return (
      <div id="display">
        This is a display grid. The game is now {this.props.gameStateName}.
        <Card />
        <Card />
      </div>
    )
  }
}
