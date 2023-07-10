import React from 'react'
import img from "./Assets/images/dev.jpg"
import { NavLink } from 'react-router-dom'
import Common from './Common'
const Home = () => {
  return (
   <>
  <Common
  name = 'Grow your buisness with'
  imgsrc={img}
  visit="/services"
  btname='Get Started'/>
   </>
  )
}

export default Home