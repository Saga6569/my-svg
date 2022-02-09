import React, { useState } from 'react';
import Ball from './Components/Ball';
import Square from './Components/Square';


const App = () => {
  const [cordinat, setCordinat] = useState({});
  const hendleSquare = (e: any) => { // Событие правого клика которое записывает элемент и координаты для всплытия окна
    const top = e.clientY - 50
    const left = e.clientX - 50
    setCordinat({top, left})
  };

  return (
    <>
     <div className="App" onClick={hendleSquare}>
        <Ball props={cordinat} />
        <Square props={cordinat} />
    </div>
    </>
  );
}

export default App;
