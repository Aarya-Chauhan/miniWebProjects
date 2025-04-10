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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-3xl font-bold mb-4">Number Guessing Game</h1>
        <h2>{message}</h2>
        {!hasWon && 
        <form onSubmit={handleSubmit}>
          <input type='number' value={userInput} placeholder='enter a number' required onChange={(e)=>{setUserInput(e.target.value)}} className='text-center'/>
          <button type='submit'>Submit</button>
        </form>}
    </div>
  );
}

export default App;
