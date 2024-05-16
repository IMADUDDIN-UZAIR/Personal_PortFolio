import React from 'react';
import Appointment from '../Appointment'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import heropic from '../assets/conhero.png'

const Contact = () => {
  return (
    <div className='bg-[#c9c0bb] overflow-hidden'>
      <div className="img  w-full flex justify-center">
        <img src={heropic} alt='' height={300} width={400} />
      </div>
      <div className="head text-6xl font-bold font-Roboto text-bold drop-shadow-md text-center flex justify-center items-center animate-pulse ">
        Get In Touch
      </div>
      <div className="p text-2xl font-Roboto flex justify-center items-center mt-6">
        Want to get in touch ? We'd love to hear from you . Here's how you can reach us...
      </div>
      {/* <div className="emil"></div> */}
      <div className="main flex justify-between items-center mt-16 space-x-3 ">
        <div className="phone space-y-10 bg-[#ece9c0] h-60  rounded-full p-3">
          <div className='text-3xl font-Roboto flex justify-center items-center '>Phone
          <FontAwesomeIcon className='size-8' icon={faPhone} /></div>
          <div className="phone text-4xl ">(+92)3455620623</div>
        </div>
        <div className="phone space-y-10 bg-[#ece9c0] h-60  rounded-full p-3">
          <div className='text-3xl font-Roboto flex justify-center items-center'>Email
          <FontAwesomeIcon className='size-8' icon={faEnvelope} /></div>
          <div className="phone text-4xl">Imad942069@gmail.com</div>
        </div>
        <div className="phone space-y-10 bg-[#ece9c0] h-60  rounded-full p-3 ">
          <span className='text-3xl font-Roboto flex justify-center items-center '>LinkedIn
          <FontAwesomeIcon className='size-8' icon={faLinkedin} /></span>
          <div className="phone text-4xl"><a href="www.linkedin.com/in/imad-ud-din-uzair-5a5433222">www.linkedin.com/in/imad-ud-din-uzair-5a5433222</a></div>
        </div>
      </div>
      {/* second-contact */}
      <div className="main flex justify-evenly items-center mt-16 space-x-8">
        <div className="phone space-y-10 bg-[#ece9c0] h-60 rounded-full p-3">
          <span className='text-3xl font-Roboto flex justify-center items-center '>WhatsApp
          <FontAwesomeIcon  className='size-8' icon={faWhatsapp} /></span>
          <div className="phone text-4xl ">(+92)3455620623</div>
        </div>
        <div className="phone space-y-10 bg-[#ece9c0] h-60  rounded-full p-3">
          <span className='text-3xl font-Roboto flex justify-center items-center '>Instagram
          <FontAwesomeIcon className='size-8'  icon={faInstagram} /></span>
          <div className="phone text-4xl">Imad942069@gmail.com</div>
        </div>
        <div className="phone space-y-10 bg-[#ece9c0] h-60  rounded-full p-3">
          <span className='text-3xl font-Roboto flex justify-center items-center  '>GitHub
          <FontAwesomeIcon className='size-8'  icon={faGithub} /></span>
          <div className="phone text-4xl"><a href="www.github.com">www.github.com</a></div>
        </div>
      </div>
      <Appointment />
    </div>
  )
}

export default Contact;
