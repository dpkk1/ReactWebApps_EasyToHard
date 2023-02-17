import React, { useState } from 'react';

const App = () => {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState('cold');

  const increaseTemp = () => {
    const newTemp = tempValue + 1;
    if (newTemp === 30) return;
    if (newTemp >= 15) {
      setTempColor('hot');
    }
    setTempValue(newTemp);
  };

  const decreaseTemp = () => {
    const newTemp = tempValue - 1;
    if (newTemp === 0) return;
    if (newTemp < 15) {
      setTempColor('cold');
    }
    setTempValue(newTemp);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decreaseTemp()}>-</button>
      </div>
    </div>
  );
};

export default App;
