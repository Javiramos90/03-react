import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UsersApp } from './UsersApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp/>
  </StrictMode>,
)
