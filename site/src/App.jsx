import React, { useEffect, useState } from 'react';
import './App.css'; // Ensure you import the CSS file

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='max-w-md flex flex-col items-center justify-center py-8'>
        <h1 className='text-red-300 text-5xl font-bold pb-2'>StopWatch</h1>
        <div className='text-xl font-semibold'>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className='flex flex-row justify-between gap-4 mt-4'>
          {running ? (
            <button
              onClick={() => setRunning(false)}
              className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow-lg"
            >
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">Stop</span>
            </button>
          ) : (
            <button
              onClick={() => setRunning(true)}
              className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow-lg"
            >
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">Start</span>
            </button>
          )}
          <button
            onClick={() => setTime(0)}
            className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow-lg"
          >
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">Reset</span>
          </button>
        </div>
      </div>
      <div className='running-man-container'>
        <img
          src={running ? '/running-man.gif' : '/standing man.jpg'}
          alt={running ? 'Running Man' : 'Standing Man'}
          className={`running-man ${running ? 'running' : 'standing'}`}
        />
      </div>
    </div>
  );
};

export default App;
