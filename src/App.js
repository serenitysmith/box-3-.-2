import Box from './Box'
import boxes from './boxes'
import React from 'react';
import './App.css';

function App() {
 const [squares, setSquares] = React.useState(boxes)
 const elements = squares.map( square => (
  <Box key={square.id} on={square.on}/>
 ))
 return (
  <main>
{elements}
  </main>
 )
}

export default App;
