import React from 'react'
import ImageBanner from '../Components/ImageBanner'
import Skills from './Skills'
import About from '../Components/About';
import Experiance from './Experiance';
import Education from './Education';
import Project from './Project';
import Contact  from './Contact';

const Home = () => {
  return (
    <>
    <div  id="home">
      <ImageBanner/>
      <About/>
      <Skills/>
      <Project/>
      <Experiance/>
      <Education/>
      <Contact/>
      </div>
    </>
  )
}

export default Home