import React from 'react';
import Card from './CardReusable';

export default function DisplayGrid(props) {

  return (
    <div id="display">
      This is a display grid. The game is now {props.gameStateName}.
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
  )
}
