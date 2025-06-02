import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { Changepassword } from './assets/Component/Changepassword'
import { Confirmacion } from './page/Confirmacion'
import { Head } from './assets/Component/Head'
import { Admin } from './page/Admin'
import { PrivateRoute } from './assets/Component/PrivateRouter'
import { Menuadmin } from './assets/Component/Menuadmin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
     <Routes>
        <Route path='/' element = {<Changepassword/>} />
        <Route path="/next-page" element = {<Confirmacion />} />
        <Route path='/admin' element ={<Menuadmin/>} />
     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
