import React from 'react'
import './About.css'
import about_img from '../../assets//about.png'
import play_icon from '../../assets//play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className=' about-left'>
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}}/>

            </div>
             <div className=' about-right'>
                <h3>About UNIVERSITY</h3>
                <h2>Nurturing Tomorroow's Leaders Today</h2>
                <p>Academics of DSU is, essentially multidisciplinary, offering four major streams initially: Medicine, Paramedical, Engineering & Technology and Agricultural Sciences. </p>
                <p>A combination of School of Medicine and School of Allied Health sciences complement each other. In addition, School of Physiotherapy and College of Nursing posits Health Education holistic in DSU.</p>
                <p> Engineering & Technology stream is offering host of eleven Engineering programs starting from B.E Mechanical Engineering, Chemical Engineering to cutting edge branches like B.E Artificial Intelligence and Data Sciences to Cyber Security.</p>
            </div>   
    </div>
  )
}

export default About