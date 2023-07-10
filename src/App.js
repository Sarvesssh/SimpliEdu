import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from './Footer';


function App() {
  return (
    <>
    <NavBar/>
  
   <Routes>
      <Route path = '/' element= {<Home/>}/>
      <Route path = '/about' element= {<About/>}/>
      <Route path = '/services' element= {<Services/>}/>
      <Route path = '/contact' element= {<Contact/>}/>
      <Route path = '/*' element= {<Home/>}/>
   



  
      </Routes>
      <Footer/>
    
    </>
  );
}

export default App;
