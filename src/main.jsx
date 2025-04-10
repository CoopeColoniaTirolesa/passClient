import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Head } from './assets/Comonent/Head.jsx'
import { PasswordProvider } from '../src/assets/Comonent/PasswordContext.jsx';

//Renderizamos la aplicacion y envolvemos con el PassworProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordProvider>  
       <App />
       <Head/>
    </PasswordProvider>
  </StrictMode>,
)
