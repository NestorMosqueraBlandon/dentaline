import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application'
import './styles/variables.css'
import './styles/main.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </React.StrictMode>
)