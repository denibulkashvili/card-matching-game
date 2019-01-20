import React, { Component } from 'react'

class Card extends Component {
  
  render() {
    return (
      <div 
        className={`single-card ${!this.props.isCardFrontSide ? 'card-back' : ''} `} 
        onClick={!this.props.isCardFrontSide ? () => this.props.handleCardClick(this.props.index) : null} >
        {this.props.isCardFrontSide ? this.props.word : ''}
      </div>
    );
  }
}

export default Card;