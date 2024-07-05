import React, { useState, useEffect } from "react";
import Button from "./Button";

function WatchBox({ addLap, resetLaps }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startWatch = () => {
    setIsRunning(true);
  };

  const stopWatch = () => {
    setIsRunning(false);
  };

  const resetWatch = () => {
    setIsRunning(false);
    setTime(0);
    resetLaps();
  };

  const lapWatch = () => {
    addLap(formatTime(time));
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}.${getMilliseconds}`;
  };

  const btnGrp = [
    { heading: "Start", color: "bg-green-500", clickHandler: startWatch },
    { heading: "Stop", color: "bg-red-500", clickHandler: stopWatch },
    { heading: "Reset", color: "bg-yellow-500", clickHandler: resetWatch },
    { heading: "Lap", color: "bg-blue-500", clickHandler: lapWatch },
  ];

  return (
    <div className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 my-10 mx-auto rounded-xl py-6 px-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <div className=" text-4xl sm:text-5xl md:text-6xl text-center mx-4 font-bold">
        <span>{formatTime(time)}</span>
      </div>

      <div className="flex justify-around items-center gap-2 mt-6 sm:flex-row flex-col">
        {btnGrp.map((btn, index) => (
          <Button key={index} heading={btn.heading} color={btn.color} clickHandler={btn.clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default WatchBox;
