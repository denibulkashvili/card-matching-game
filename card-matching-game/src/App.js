import React, { Component } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import { setTimeout } from 'timers';
import { shuffledVocabList } from './vocabulary/vocabHandler';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
    
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameRunning: false,
      matchedCards: [],
      clickedCard1: -1,
      clickedCard2: -1
    };
    this.toggleGame = this.toggleGame.bind(this);
    this.compareCards = this.compareCards.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  toggleGame() {
    const isCurrentlyRunning = this.state.isGameRunning;
    this.setState({
      isGameRunning: !(isCurrentlyRunning),
      // reset states
      matchedCards: [],
      clickedCard1: -1,
      clickedCard2: -1
    }, () => { //optional callback parameter
      console.log(`The game is now ${this.state.isGameRunning ? 'running' : 'stopped'}`);
    });
    
  }
  
  get buttonLabel() {
    return this.state.isGameRunning ? 'Stop' : 'Start';
  }
  
  get cardsFacedFront() {
    return [this.state.clickedCard1, this.state.clickedCard2, ...this.state.matchedCards];
  }

  isCardFrontSide = (index) => {
    const listCardsFacedFront = this.cardsFacedFront;
    const count = listCardsFacedFront.length;
    if (count !== 0) {
      for(let i=0; i<count; i++) {
        if(listCardsFacedFront[i]===index) {
          return true;
        }
      }
    }
    return false;
  }

  compareCards(cardIndex1, cardIndex2) {
    return shuffledVocabList[cardIndex1] === shuffledVocabList[cardIndex2];
  }

  addNotification(type, message) {
    this.notificationDOMRef.current.addNotification({
      message: message,
      type: type,
      insert: "top",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }


  handleMatchedCards() {
    this.addNotification("success", 'The cards matched!');
    this.setState(state =>{
      const matchedCards = state.matchedCards.concat(this.state.clickedCard1, this.state.clickedCard2);
      return {
        matchedCards,
        clickedCard1: -1,
        clickedCard2: -1
      };
    }, () => {
      console.log(`The cards are added to matchedCards: ${this.state.matchedCards}`);
    });
  }
  handleUnmatchedCards() {
    this.addNotification("danger", "No Match!");
    setTimeout(() =>{
      this.setState({
        clickedCard1: -1,
        clickedCard2: -1
      }, () => {
        console.log('No match!');
      });
    }, 1000);
  }

  handleCardClick = (index) => {
    if (this.state.clickedCard1 < 0) {
      this.setState({clickedCard1: index}, () => {console.log(`Card clicked 1: ${this.state.clickedCard1} : ${shuffledVocabList[this.state.clickedCard1]} `)});
    }
    else if (this.state.clickedCard2 < 0) {
      this.setState({clickedCard2: index}, () => {
        console.log(`Card clicked 2: ${this.state.clickedCard2} : ${shuffledVocabList[this.state.clickedCard2]} `);
        const isFlippedCardsMatch = this.compareCards(this.state.clickedCard1, this.state.clickedCard2);
        if (isFlippedCardsMatch) {
          this.handleMatchedCards();   
        }
        else {
          this.handleUnmatchedCards();
        }
      });
    }
  }
  

  get renderCards() {
    return (
      shuffledVocabList.map((word, index) => {
        return (<Card
          key={index}
          word={word}
          index={index} 
          handleCardClick={this.handleCardClick} 
          isCardFrontSide={this.isCardFrontSide(index)}
          />
        );
      })
    );
  }

  get renderedDisplay() {
    if (this.state.isGameRunning) {
      return (
        <div className="display display-running-game shadow rounded">
          {this.renderCards}
        </div>
      );   
    }
    else {
      return <div className="display shadow rounded">Press Start to run the game!</div>;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <ReactNotification ref={this.notificationDOMRef} />
          <h1 className="title">Card Matching Game</h1> 
          {this.renderedDisplay}
          <Button buttonLabel={this.buttonLabel} handleClick={this.toggleGame} />
        </div>
      </div>
    );
  }
}

export default App;
