import React, { useState } from 'react';
import Ball from './Components/Ball';
import Square from './Components/Square';
import Ball2 from './Components/Ball2';


const App = () => {
  const [cordinat, setCordinat] = useState({left: 0, top: 0});
  const hendleSquare = (e: { clientY: number, clientX: number } ) => { // Событие правого клика которое записывает элемент и координаты для всплытия окна
    const top = e.clientY - 50
    const left = e.clientX - 50
    setCordinat({top, left});
  };

  const [ral, setRal] = useState('');

  const randomColor = () => {
    const arrCollor = ['red', 'aqua', 'silver', 'blue' ];
    const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    setRal(arrCollor[randomNumber(0, 3)]);
  };

  return (
    <>
     <div className="App" onClick={hendleSquare}>
     <Square  props={cordinat}/>
     <Ball />   
    </div>
    <div className='test4'>
    <button id="color" onClick={() => randomColor()} style={{'backgroundColor': ral}} >Кликни меня</button>
    </div>
    <Ball2 />
    </>
  );
}

export default App;
