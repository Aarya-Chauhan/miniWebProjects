import { useState } from 'react';


function App() {
  const SecretNumber = 7;
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("Guess the secret number!!");
  const [hasWon, settHasWon] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (parseInt(userInput) === SecretNumber){
      setMessage("🎉 Congratulations! You Win!")
      settHasWon(true)
    } else {
      setMessage("❌ Try again!")
      setUserInput("")
      setTimeout(() => {
        setMessage("Guess the secret number!");
      }, 2000);
    }
  }
 
  return (
    <div> 
      <h1 >Number Guessing Game</h1>
        <h2>{message}</h2>
        {!hasWon && 
        <form onSubmit={handleSubmit}>
          <input type='number' value={userInput} placeholder='enter a number' required onChange={(e)=>{setUserInput(e.target.value)}} />
          <button type='submit'>Submit</button>
        </form>}
    </div>
  );
}

export default App;
