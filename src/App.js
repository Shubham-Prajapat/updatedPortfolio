import './App.css';
import Home from '../src/Components/Home'
import {  Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Skills from './Components/Skills';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import 'animate.css';
import Contact from './Components/Contact';
import Project from './Components/Project';

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='skill' element={<Skills/>} />     
          <Route path='contact' element={<Contact/>} />
          <Route path='projects' element={<Project/>} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;

