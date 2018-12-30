import React, { Component } from 'react';
import Card from './CardReusable';

export default class DisplayGrid extends Component {

  render() {
    return (
      <div>
        This is a display grid.
        <Card />
        <Card />
      </div>
    )
  }
}
