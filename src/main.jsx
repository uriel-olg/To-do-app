import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TareasProvider } from './components/TareasContext.jsx';
import { ThemeProvider } from './components/ModeTheme.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <TareasProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </TareasProvider>
  </ThemeProvider>
)
