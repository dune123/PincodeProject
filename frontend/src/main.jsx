import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PostOfficeProvide } from './context/postContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <PostOfficeProvide>
    <App />
  </PostOfficeProvide>
  </StrictMode>,
)
