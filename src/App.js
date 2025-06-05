import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Topnav from './components/Topnav';
import About from './components/About';
import Experience from './components/Experience';
import Learncard from './components/Learncard';
import Servicecard from './components/Servicecard';
import Myprojects from './components/Myprojects';
import Feature from './components/Feature';
import Connect from './components/Connect';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Topnav/>
      <About/>
      <Experience/>
      <Learncard/>
      <Servicecard/>
      <Feature/>
      <Myprojects/>
      <Connect/>
      <Footer/>
      
     </>
  );
}

export default App;
