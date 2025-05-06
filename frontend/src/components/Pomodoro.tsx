// src/components/PomodoroTimer.tsx
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';

const Pomodoro: React.FC = () => {
  const totalTime = 25 * 60; // 25 minutes
  const [secondsLeft, setSecondsLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const toggleTimer = () => setIsRunning(prev => !prev);
  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(totalTime);
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  const percentage = ((totalTime - secondsLeft) / totalTime) * 100;

  return (
    <div className='Pomodoro_container'>
      <div className='ProgressBar'>
        <CircularProgressbar
          value={percentage}
          text={formatTime(secondsLeft)}
          styles={buildStyles({
            textColor: '#f88',
            pathColor: '#4CAF50',
            trailColor: '#ddd',
          })}
        />
      </div>
      <div className='btns'>
        <button onClick={toggleTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer} style={{ marginLeft: 10 }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
