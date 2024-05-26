import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import HeaderBar from './components/NavBar/HeaderBar'
import TopBar from './components/NavBar/TopBar'
import HomePage from './Pages/Home/HomePage'
import AboutPage from './Pages/About/AboutPage'
import Footer from './components/Footer/Footer'
import ServicesPage from './Pages/Services/ServicesPage'
import TeamPage from './Pages/Team/TeamPage'
import ContactPage from './Pages/Contact/ContactPage'
import PortfolioPage from './Pages/Portfolio/PortfolioPage'
import PortfolioDetailsPage from './Pages/PortfolioDetails/PortfolioDetailsPage'

function App() {
  return (
    <div>
      <HashRouter>
        <TopBar />
        <HeaderBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/portfoliodetails/:id' element={<PortfolioDetailsPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App