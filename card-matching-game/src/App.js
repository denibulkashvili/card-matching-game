import React, { Component } from 'react';
import Button from './components/ButtonReusable';
import DisplayGrid from './components/DisplayGrid';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayGrid />
        <Button />
      </div>
    );
  }
}

export default App;
