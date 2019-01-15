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
      <div className={
             `single-card 
             has-text-centered
             ${this.state.isCardUncovered ? "card-front" : "card-back"}`
           } 
           onClick={this.handleClick} 
      >
       {this.state.isCardUncovered ? this.props.name : ""}
      </div>
        
        
    
    )
  }
  
}
