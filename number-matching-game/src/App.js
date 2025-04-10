import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const SecretNumber = 7;
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("Guess the secret number!!");
  const [hasWon, settHasWon] = useState(false);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
