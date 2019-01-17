import React, { Component } from 'react'

class Card extends Component {
  
  render() {
    return (
      <div 
        className={`single-card has-text-centered`} 
        onClick={() => this.props.flipCard(this.props.word)} >
        {this.props.isCardFrontSide ? this.props.word : ''}
      </div>
    );
  }
}

export default Card;