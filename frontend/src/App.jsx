import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CursorFollower from './components/CursorFollower'
import LoadingScreen from './components/LoadingScreen'
import { DarkModeProvider } from './contexts/DarkModeContext'

function App() {
  return (
    <DarkModeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <CursorFollower />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App