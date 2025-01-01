import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DrinkProvider } from './Context/DrinkContext.jsx'

createRoot(document.getElementById('root')).render(
  <DrinkProvider>
      <App />
  </DrinkProvider>
   
  
)
