import { useState } from 'react'

import './App.css'
import { TopBar } from './Components/TopBar/TopBar'
import { GWJBar } from './Components/IWJBar/GWJBar'

function App() {
  const [count, setCount] = useState<number>(0)
  const [message, setMessage] = useState<string>("")

  return (
    <div className='mainContainer'>
        <TopBar></TopBar>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GWJBar></GWJBar>  
        </div>
        <div className="card">
          <button onClick={() => setMessage("Pressed button")}>
            Escanear
          </button>
          <p>
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
