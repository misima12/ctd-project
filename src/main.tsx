import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter , Route,Routes} from 'react-router'
import MainPage from './pages/MainPage.tsx'
import SettingPage from './pages/SettingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MainPage" element={<MainPage/>} />
        <Route path="/SettingPage" element={<SettingPage />} />
      </Routes> 
    </BrowserRouter>
  
  </StrictMode>,
)
