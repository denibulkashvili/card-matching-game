import React from 'react';
import Card from './CardReusable';

export default function DisplayGrid(props) {

    return (
      <div id="display">
        This is a display grid. The game is now {this.props.gameStateName}.
        <Card />
        <Card />
      </div>
    )
  }
