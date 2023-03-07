import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {FiYoutube} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/avverma9" target="_blank"><SiLinkedin/></a>
        <a href="https://github.com/avverma9" target="_blank"><BsGithub/></a>
        <a href="https://youtube.com/@avverma9" target="_blank"><FiYoutube/></a>

    </div>
  )
}

export default HeaderSocials