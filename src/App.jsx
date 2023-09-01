import { useState } from 'react'
import './App.css'
// import AboutMe from './components/pages/AboutMe'
// import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'
import Header from './components/pages/Header'
// import Portfolio from './components/pages/Portfolio'
// import Resume from './components/pages/Resume'
import PortfolioContainer from './components/PortfolioContainer'

function App() {

  return (
  <>
  {/* <AboutMe></AboutMe>
  <Portfolio></Portfolio>
  <Contact></Contact> */}
  <Header></Header>
  <PortfolioContainer></PortfolioContainer>
  <Footer></Footer>
  </>
  )
}

export default App
