import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Head } from './assets/Comonent/Head.jsx'
import { PasswordProvider } from '../src/assets/Comonent/PasswordContext.jsx';
import { Provider } from 'react-redux'
import  store  from '../src/Redux/Store/Index.js'

//Renderizamos la aplicacion y envolvemos con el PassworProvider
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <PasswordProvider>  
       <App />
       <Head/>
    </PasswordProvider>
  </StrictMode>,
  </Provider>
)
