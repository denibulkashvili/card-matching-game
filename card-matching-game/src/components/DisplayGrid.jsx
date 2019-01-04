import React, { Component } from 'react';
import Card from './CardReusable';
export default class DisplayGrid extends Component {
  
  render() {
    return (
      <div id="display">
        <div id="image-grid">
          <Card src={"/img/img01.jpg"} vocabId={1} />
          <Card src={"/img/img02.jpg"} vocabId={2} />
          <Card src={"/img/img03.jpg"} vocabId={3} />
          <Card src={"/img/img04.jpg"} vocabId={4} />
          <Card src={"/img/img05.jpg"} vocabId={5} />
          <Card src={"/img/img06.jpg"} vocabId={6} />
          <Card src={"/img/txt01.jpg"} vocabId={1} />
          <Card src={"/img/txt02.jpg"} vocabId={2} />
          <Card src={"/img/txt03.jpg"} vocabId={3} />
          <Card src={"/img/txt04.jpg"} vocabId={4} />
          <Card src={"/img/txt05.jpg"} vocabId={5} />
          <Card src={"/img/txt06.jpg"} vocabId={6} />
        </div>
      </div>
    );
  }
  
}
