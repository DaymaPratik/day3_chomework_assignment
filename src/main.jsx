import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import MainSection from './Components/MainSection/MainSection'
import SubMainSection from './Components/SubMainSection/SubMainSection'
import Footer from './Components/Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <MainSection/>
    <SubMainSection/>
    <Footer/>
  </React.StrictMode>,
)
