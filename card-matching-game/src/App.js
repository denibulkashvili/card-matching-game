import React, { Component } from 'react';
import Button from './components/ButtonReusable';
import DisplayGrid from './components/DisplayGrid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: gameState.Stopped,
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Card Matching Game</h1> 
        <DisplayGrid />
        <Button />
      </div>
    );
  }
}

export default App;
