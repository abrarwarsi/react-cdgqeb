import React from 'react';
import './style.css';
import Joke from './Joke';

function App() {

  return (
    <div>
      <h2>Laugh if you find it funny!</h2>
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