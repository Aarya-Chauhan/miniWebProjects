import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PasswordChecker from './components/PasswordChecker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordChecker />
    </>
  )
}

export default App
