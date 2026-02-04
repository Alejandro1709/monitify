import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MonitifyApp from './MonitifyApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MonitifyApp />
  </StrictMode>,
)
