import React from 'react';
import Checkbox from './components/Checkbox';

function App() {
  return (
    <div className="App">
      <h1>Component testing is done with react-testing-library</h1>
     <Checkbox labelOn='On' labelOff='Off'/>
    </div>
  );
}

export default App;
