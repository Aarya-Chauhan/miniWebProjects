import { useEffect, useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second (optional)
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);

      const hour = currentTime.getHours();

      if (hour < 12) {
        setGreeting('Good Morning ☀️');
      } else if (hour >= 12 && hour < 16) {
        setGreeting('Good Afternoon 🌤');
      } else if (hour >= 16 && hour < 20) {
        setGreeting('Good Evening 🌇');
      } else {
        setGreeting('Good Night 🌙');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-3xl font-semibold">
      <p className="mb-4">{greeting}</p>
      <p className="text-xl text-gray-600">
        Current time: {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default App;
