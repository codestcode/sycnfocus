import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'D:/habeba/habeba/new work of DOM/dashbor--/src/styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
