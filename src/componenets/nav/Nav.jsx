import React from 'react'
import './Nav.css'
import {TfiHome} from 'react-icons/tfi'
import {SiAboutdotme} from 'react-icons/si'
import {BiBookReader} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() =>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><TfiHome/></a>
      <a href="#about"onClick={() =>setActiveNav('#about')}><SiAboutdotme/></a>
      <a href="#experience"onClick={() =>setActiveNav('#experience')}><BiBookReader/></a>
      <a href="#testimonials"onClick={() =>setActiveNav('#testimonials')}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact"onClick={() =>setActiveNav('#contact')}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav