import React, { Component } from 'react';
import Button from './components/Button';
import Card from './components/Card';

const vocabList = [
  'colorful macaw', 'plain egret', 'dangerous jaguar', 
  'friendly river dolphin', 'energetic spider monkey', 'calm sloth',
];
const doubledVocabList = [...vocabList, ...vocabList];
const shuffleCards = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
const shuffledVocabList = shuffleCards(doubledVocabList);

    
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
    const list = this.cardsFacedFront;
    const count = list.length;
    if (count !== 0) {
      for(let i=0; i<count; i++) {
        if(list[i]===index) {
          return true;
        }
      }
    }
    return false;
  }

  compareCards(cardIndex1, cardIndex2) {
    return shuffledVocabList[cardIndex1] === shuffledVocabList[cardIndex2];
  }

  handleCardClick = (index) => {
    if (this.state.clickedCard1 < 0) {
      this.setState({clickedCard1: index}, () => {console.log(`Card clicked 1: ${this.state.clickedCard1} : ${shuffledVocabList[this.state.clickedCard1]} `)});
    }
    else if (this.state.clickedCard2 < 0) {
      this.setState({clickedCard2: index}, () => {console.log(`Card clicked 2: ${this.state.clickedCard2} : ${shuffledVocabList[this.state.clickedCard2]} `)});
    }
    else {
      const isFlippedCardsMatch = this.compareCards(this.state.clickedCard1, this.state.clickedCard2);
      if (isFlippedCardsMatch) {
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
      else {
        this.setState({
          clickedCard1: -1,
          clickedCard2: -1
        }, () => {
          alert('No match!');
        });
      }
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
