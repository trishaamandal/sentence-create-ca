import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft, onTimeEnd }) => {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeEnd();
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, setTimeLeft, onTimeEnd]);

  return (
    <div className="text-right text-sm text-gray-600 mb-4">
      <span className="text-2xl font-bold text-gray-600">
        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;