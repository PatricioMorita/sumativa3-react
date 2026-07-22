import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap: framework de estilos (requerimiento b)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Estilos propios de la aplicacion
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
