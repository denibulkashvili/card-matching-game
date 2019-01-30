import React, {Component} from 'react';



class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      wordList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newWordList = this.state.value;
    if(newWordList.length !== 0) {
      this.setState({
        wordList: [...newWordList.split(", ")]
      }, () => {
        console.log("Added new words: " + this.state.wordList);
        this.props.updateVocab(this.state.wordList);
      });
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter words separated with commas (6 words would work best):
          <input type="text" value={this.state.value} onChange={event => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;