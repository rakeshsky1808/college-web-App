import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './../../assets/logo.png'
import { useContext } from 'react';
import { Link } from 'react-scroll'




export const Navbar = () => {

       const[sky,setSky]=useState(false);
       useEffect(()=>{
        window.addEventListener('scroll',()=>{
          window.scrollY > 50 ? setSky(true) : setSky(false);
        })
       },[]);
  return (
    <nav className={`containe ${sky?'dark-nav' : ''}`}>
       <img src={logo} className='logo'/>
        <ul>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>HOME</Link> </li>
          <li><Link to='program' smooth={true} offset={-260} duration={500}>program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500}> Contact us</Link></li>
          
          </ul>
    </nav>
  )
}
