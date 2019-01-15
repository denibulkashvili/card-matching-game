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
  
  get buttonLabel() {
    const gameStateName = this.gameStateName;
    if (gameStateName === 'Running') {
      return 'Stop';
    }
    else {
      return 'Start';
    }
  }

  changeGameState = () => {
    const gameStateName = this.gameStateName;
    if (gameStateName==='Running') {
      this.setState({
        gameState: gameState.Stopped
      });
    }
    else {
      this.setState({
        gameState: gameState.Running
      });
    }
    console.log(`gameStateName changed to ${gameStateName}.`)
  }

  

  render() {
    let display;
    if (this.gameStateName === 'Running') {
      display = <DisplayGrid gameStateName={this.gameStateName} />
    } 
    else {
      display = <div id="display">Press Start to run the game!</div>
    }

    return (
      <div className="App">
        <div className="container">
          <h1 className="title is-1 content has-text-white has-text-centered">Card Matching Game</h1> 
          <div className="box">
            {display}
          </div>
          <Button buttonLabel={this.buttonLabel} handleClick={this.changeGameState} />
        </div>
      </div>
    );
  }
}

export default App;
