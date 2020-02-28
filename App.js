import React from 'react';
import './style.css';
import Joke from './Joke';

function App() {
  const arr = [1,2,3,4,5];
  const doubled = arr.map(function(number) {
    return number *2;
  })
  console.log(doubled);

  return (
    <div>
      <h2>Laugh if you find it funny!</h2>
      <Joke
      punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."/>
      <Joke 
      question="What's the best thing about Switzerland?"
      punchline="I don't know, but the flag is a big plus!"/>
      <Joke
      question="Did you hear about the mathematician who's afraid of negetive numbers?"
      punchline="He'll stop at nothing to avoid them!"/>
      <Joke
      question="Hear about the new restaurant called Karma?"
      punchline="There's no menu; you get what you deserve."/>
      <Joke
      question="Did you hear about the actor who fell through floorboards?"
      punchline="He was just going through a stage."/>
      <Joke
      question="Did you hear about the claustrophobic astronaut?"
      punchline="He just needed a little space."/>
    </div>
  )
}

export default App;