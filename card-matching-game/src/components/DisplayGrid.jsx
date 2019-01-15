import React, { Component } from 'react';
import Card from './CardReusable';

const vocab = ['chocolate', 'candy', 'present', 'card', 'baloon', 'cake'];

export default class DisplayGrid extends Component {
    
  doubleVocabSize = (arr) => {
    const duplicateArr = [...arr];
    const newArr = arr.concat(duplicateArr);
    return newArr;
  }
  shuffleVocab = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  newVocab = this.doubleVocabSize(vocab);
  shuffledVocab = this.shuffleVocab(this.newVocab);
  

  handleChange = () => {
    return true;
  }

  render() {
    return (
      <div className="display-grid">
        {this.newVocab.map(card => (
              <Card name={card} onChange={this.handleChange} />
        ))}
      </div>            
    );
  }
  
}
