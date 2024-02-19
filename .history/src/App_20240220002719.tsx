import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockContainer from './containers/ClockContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClockContainer />
    </>
  )
}

export default App
