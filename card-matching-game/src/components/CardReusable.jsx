import React, {Component} from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardUncovered: false,
      cardState: 'hidden'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isCardUncovered: !prevState.isCardUncovered
    }));
    console.log(`Card is now ${this.state.isCardUncovered ? 'uncovered' : 'covered'}`);    
  }
  
  render() {
    return (
      <img 
        className="image" 
        src={this.state.isCardUncovered ? this.props.src : "/img/cover.png"} 
        alt=""
        onClick={this.handleClick}
      />
    )
  }
  
}
