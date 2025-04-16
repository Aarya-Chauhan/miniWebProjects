import React, { useEffect, useState } from "react";
import '../styles/AnalogClock.css'; // Import your CSS file for styling

const AnalogClock = () => {
  const [greeting, setGreeting] = useState('');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = minutes * 6 + seconds * 0.1; // smooth minute hand
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360 / 12

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
      <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }} />
      <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }} />
      <div className="center-dot" />
    </div>
  );
};

export default AnalogClock;
