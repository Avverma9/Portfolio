import React from 'react'
import './About.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Wanna Know </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5> 
              <small>6+ Months Trainee at FunctionUp</small>
            </article>
            <article className='about__card'>
              <VscProject className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>

            </article>
          </div>
          <p>As a recent B.Sc graduate with a background in mathematics, and a current MCA student at Manipal University, 
            I have developed a passion for web development and have been working as a trainee web developer at FunctionUp.
             During my time at FunctionUp, I have acquired hands-on experience in various web development technologies,
              including MongoDB, Express.js, React.js, Node.js, and MySQL. Additionally,
               I have recently learned new skills and complete many projects With my knowledge and skills in web development, 
               combined with my academic background in mathematics, I have developed a strong analytical and problem-solving ability that I can apply to my work as a web developer.
                I am dedicated to delivering high-quality work and have a keen eye for detail. I am constantly seeking to learn and grow, both professionally and personally, and am excited about exploring new technologies and pushing the boundaries of what I can achieve as a web developer.
               In my free time, I enjoy exploring new programming languages, building side projects, and engaging in outdoor activities such as hiking and camping.
               </p>
               <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
