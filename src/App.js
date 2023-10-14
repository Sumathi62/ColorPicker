import React, { useState } from 'react';
import './index.css';

function App() {
  const colors = [
    'red', '#00FF01', 'blue', '#FFFF00', '#FF00FE', '#00FFFF', '#FEA500', '#81007F', '#FFC0CB',
    '#008001', '#FE6347', '#01CED1', '#894516', '#FF8B00', '#4682B4', '#FED700'
  ];

  const [colorBoxesVisible, setColorBoxesVisible] = useState(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('rgb(70, 67, 67)');

  const handleButtonClick = () => {
    setColorBoxesVisible(!colorBoxesVisible);
  };

  const handleColorBoxClick = (color) => {
    setButtonBackgroundColor(color);
    setColorBoxesVisible(false);
  };

  return (
    <div id='container'>
      <h1>Color Picker</h1>
      <div id='colors'>
        {colorBoxesVisible &&
          colors.map((color, index) => (
            <div
              key={index}
              className='color-box'
              style={{ backgroundColor: color }}
              onClick={() => handleColorBoxClick(color)}
            ></div>
          ))}
        <div className="break">
          <button onClick={handleButtonClick}>Pick a color</button>
        </div>
      </div>
      <style>
        {`
          #container #colors button {
            border: none;
            color: white;
            background: ${buttonBackgroundColor};
            font-size: 20px;
            width: 150px;
            height: 50px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default App;