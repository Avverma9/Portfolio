import React from 'react'
import CV from '../../assets/Resume_Ankit Kumar Verma.pdf'
const cv = () => {
  return (
    <div className='cv'>
        <a href={CV} download className='btn'>Get CV</a>
        <a href="#contact" className='btn btn-primary'>Connect</a>
    </div>
  )
}

export default cv