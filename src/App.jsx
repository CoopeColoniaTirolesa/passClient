import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Changepassword } from './assets/Comonent/Changepassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Changepassword/>
      </div>

    </>
  )
}

export default App
