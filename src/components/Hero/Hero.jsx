import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>DHANALAKSHMI SRINIVASAN UNIVERSITY</h1>
            <p>The Dhanalakshmi Srinivasan University (DSU) has been established under the Tamil Nadu Private Universities Act, 2019, located in Tiruchirappali, Tamil Nadu, India. Uniqueness of DSU lies in its multi-disciplinary nature in offering a wide range of academic programmes encompassing medicine and engineering.</p>
            <button className='btn'>Explore more <img src={dark_arrow}/></button>
        </div>
    </div>
  )
}

export default Hero