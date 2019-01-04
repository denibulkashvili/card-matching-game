import React, { Component } from 'react';
import Card from './CardReusable';
export default class DisplayGrid extends Component {
  
  render() {
    return (
      <div id="display">
        <div id="image-grid">
          <Card src={"/img/img01.JPG"} vocabId={1} />
          <Card src={"/img/img02.JPG"} vocabId={2} />
          <Card src={"/img/txt03.JPG"} vocabId={3} />
          <Card src={"/img/img05.JPG"} vocabId={5} />
          <Card src={"/img/txt04.JPG"} vocabId={4} />
          <Card src={"/img/txt06.JPG"} vocabId={6} />
          <Card src={"/img/img04.JPG"} vocabId={4} />
          <Card src={"/img/img06.JPG"} vocabId={6} />
          <Card src={"/img/txt01.JPG"} vocabId={1} />
          <Card src={"/img/txt02.JPG"} vocabId={2} />
          <Card src={"/img/img03.JPG"} vocabId={3} />
          <Card src={"/img/txt05.JPG"} vocabId={5} />
        </div>
      </div>
    );
  }
  
}
