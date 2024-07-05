import React, { useState } from 'react';
import Header from './Components/Header';
import WatchBox from './Components/WatchBox';
import LapRecord from './Components/LapRecord';

function App() {
  const [laps, setLaps] = useState([]);

  const addLap = (lap) => {
    setLaps([...laps, lap]);
  };

  const resetLaps = () => {
    setLaps([]);
  };

  return (
    <div className='m-0 p-0'>
      <Header />
      <WatchBox addLap={addLap} resetLaps={resetLaps} />
      <LapRecord laps={laps} />
    </div>
  );
}

export default App;
