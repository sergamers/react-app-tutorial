import React from 'react';
import InputOne from './components/input-one';
import InputTwo from './components/input-two';

function App() {
  return (
    <div className="App">
      <InputOne min={0} max={10} />
      <InputTwo min={3} max={5} />
    </div>
  );
}

export default App;
