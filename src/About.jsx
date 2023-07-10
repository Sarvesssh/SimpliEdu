import React from 'react'
import img from "./Assets/images/hero-img.619f0cc8.png"
import { NavLink } from 'react-router-dom'
import Common from "./Common"
const About = () => {
  return (
   <>
   <Common 
   name = 'Welcome to About page'
   imgsrc={img}
   visit="/contact"
   btname='Contact Now'
    />
   </>
  )
}

export default About