import React from 'react'
import './App.css'



import Header from './components/Head/Header.jsx'
import Home from './components/Home/home'
import Features from './components/Features/Features'
import Prof from './components/portfolio/protfolio'
import Resume from './components/resume/Resume'
import Contact from './components/contact/contact'


const App = () => {
  return (

    <>
      <Header/>
       <Home/>
       <Features/>
        <Prof/>
        <Resume/>
        <br />
        <br />
        <br />
        <Contact/>

    </>

       
       
  )
}

export default App


