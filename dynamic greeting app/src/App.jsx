import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnalogClock from './components/AnalogClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Analog Clock </h1>
        <AnalogClock />
      </div>
    </>
  )
}

export default App
