import React from 'react';
import './style.css';
import Joke from './Joke';
import jokesData from './jokesData';

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
  console.log(jokeComponents)

  return (
    <div>
      <h2>Laugh if you find it funny!</h2>
      {jokeComponents}
    </div>
  )
}

export default App;