import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx'
import SettingPage from './pages/SettingPage.tsx'
import PersonalityDiagnosis from './pages/Personality-Diagnosis.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MainPage" element={<MainPage/>} />
        <Route path="/SettingPage" element={<SettingPage />} />
        <Route path="/PersonalityDiagnosis" element={<PersonalityDiagnosis />} />
      </Routes> 
    </BrowserRouter>
  
  </StrictMode>,
)