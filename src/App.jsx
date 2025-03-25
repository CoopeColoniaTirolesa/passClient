import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { Changepassword } from './assets/Comonent/Changepassword'
import { Confirmacion } from './page/Confirmacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element = {<Changepassword/>} />
        <Route path="/next-page" element = {<Confirmacion />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
