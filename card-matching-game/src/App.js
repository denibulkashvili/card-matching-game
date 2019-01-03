import React, { Component } from 'react';
import Button from './components/ButtonReusable';
import DisplayGrid from './components/DisplayGrid';


const gameState = {
  Stopped: 0,
  Running: 1,
  Finished: 2
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: gameState.Stopped,
    };
  }

  get gameStateName() {
    const currentGameState = this.state.gameState;
    switch(currentGameState) {
      case 0:
        return 'Stopped';
      case 1:
        return 'Running';
      case 2:
        return 'Finished';
      default:
        return '';
    }
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
