// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component, useState } from 'react'
import './App.css'

// components
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Footer from './components/footer/footer'

// pages
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio'
import Contact from './pages/contact/contact'
import ContactForm from './pages/contact/contact'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const navigate = (event) => {
    event.preventDefault();
    setCurrentPage(event.target.innerText);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return Home();
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      default:
        return Home();
    }
  };

  return (
    <>
    <div className='container'>
      <h1>
        <Header />
        <Navbar onNavigate={navigate} />
        
      </h1>
      <img className="me" src="./me.png"></img>
    </div>
    <p classname="renderpage">{renderPage()}</p>
      <Footer />
    </>
  )
}

export default App