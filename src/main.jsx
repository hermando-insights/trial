import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'remixicon/fonts/remixicon.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

// BrowserRouter DIHAPUS dari sini supaya tidak bentrok
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);