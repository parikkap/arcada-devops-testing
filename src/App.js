import React from 'react';
import Checkbox from './components/Checkbox';

export const add = (x, y) =>  x + y;

function App() {
  return (
    <div className="App">
      <h1>Component testing is done with react-testing-library</h1>
     <Checkbox labelOn='On' labelOff='Off'/>
    </div>
  );
}

export default App;
