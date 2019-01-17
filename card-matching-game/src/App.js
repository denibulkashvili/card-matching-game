import React, { Component } from 'react';
import Button from './components/Button';
import Card from './components/CardReusable';

const vocabList = [
  'colorful macaw', 'plain egret', 'dangerous jaguar', 
  'friendly river dolphin', 'energetic spider monkey', 'calm sloth',
  'colorful macaw', 'plain egret', 'dangerous jaguar', 
  'friendly river dolphin', 'energetic spider monkey', 'calm sloth'
];
    
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameRunning: false,
      cards: vocabList,
      matchedCards: [],
      flippedCards: [],
      clickedCard: ''
    };
    this.toggleGame = this.toggleGame.bind(this);
    this.compareCards = this.compareCards.bind(this);
  }

  toggleGame() {
    const isCurrentlyRunning = this.state.isGameRunning;
    this.setState({
      isGameRunning: !(isCurrentlyRunning),
      // reset states
      matchedCards: [],
      flippedCards: [],
      clickedCard: ''
    }, () => { //optional callback parameter
      console.log(`The game is now ${this.state.isGameRunning ? 'running' : 'stopped'}`);
    });
    
  }
  
  get buttonLabel() {
    return this.state.isGameRunning ? 'Stop' : 'Start';
  }
  
  isCardFlipped = (word) => {
    const count = this.state.flippedCards.length;
    if (count !== 0) {
      for(let i=0; i<count; i++) {
        if(this.state.flippedCards[i]===word) {
          return true;
        }
      }
    }
    return false;
  }

  get cardsFacedFront() {
    return [...this.state.flippedCards, ...this.state.matchedCards];
  }

  isCardFrontSide = (word) => {
    const list = this.cardsFacedFront;
    console.log(`Word is front side: ${word}`);
    const count = list.length;
    if (count !== 0) {
      for(let i=0; i<count; i++) {
        if(list[i]===word) {
          return true;
        }
      }
    }
    return false;
  }

  compareCards(card1, card2) {
    return card1 === card2;
  }

  flipCard = (word) => {
    this.setState({clickedCard: word});
    this.setState(state => {
      const flippedCards = state.flippedCards.concat(state.clickedCard);
      return {
        flippedCards,
        clickedCard: ''
      };
    }, () => {
      console.log(`The card is added to flippedCards: ${this.state.flippedCards}`);
      if (this.state.flippedCards.length === 2) {
        const isFlippedCardsMatch = this.compareCards(...this.state.flippedCards);
        if (isFlippedCardsMatch) {
          this.setState(state =>{
            const matchedCards = state.matchedCards.concat(...state.flippedCards);
            return {
              matchedCards,
              flippedCards: [],
              clickedCard: ''
            };
          }, () => {
            console.log(`The cards are added to matchedCards: ${this.state.matchedCards}`);
          });
        }
        else {
          this.setState({
            flippedCards: [],
            clickedCard: ''
          }, () => {
            console.log('No match!');
          });
        }
      }
    });
  }

  get renderCards() {
    return (
      this.state.cards.map((word, index) => {
        return (<Card
          key={index}
          word={word} 
          flipCard={this.flipCard} 
          isCardFrontSide={this.isCardFrontSide(word)}
          />
        );
      })
    );
  }

  get renderedDisplay() {
    if (this.state.isGameRunning) {
      return (
        <div id="display">
          {this.renderCards}
        </div>
      );   
    }
    else {
      return <div id="display">Press Start to run the game!</div>;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title is-1 content has-text-white has-text-centered">Card Matching Game</h1> 
          <div className="box">
            {this.renderedDisplay}
          </div>
          <Button buttonLabel={this.buttonLabel} handleClick={this.toggleGame} />
        </div>
      </div>
    );
  }
}

export default App;
