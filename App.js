import React from 'react';
import './style.css';

function App() {
const styles = {
  color: "blue",
  backgroundColor: "yellow"
}

  return (
    <div>
      <h2 style={styles}>To-Do List</h2>
      <input type="checkbox" />
      <span>Some kind of task 1</span><br />
      <input type="checkbox" />
      <span>Some kind of task 2</span><br />
      <input type="checkbox" />
      <span>Some kind of task 3</span><br />
      <input type="checkbox" />
      <span>Some kind of task 4</span><br />
    </div>
  )
}

export default App;