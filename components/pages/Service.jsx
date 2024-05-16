import React from 'react'
import image from '../assets/serhero.jpg'
import ser1 from '../assets/webdes.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import ser2 from '../assets/custom.jpeg'
import ser3 from '../assets/res.jpeg'
import Footer from '../Footer';

const Service = () => {
  return (
    <div className='bg-[#c9c0bb]'>

      <div className="pic ">
        <img className='size-96 w-full' src={image} alt=' ' />
      </div>
   <div className="1st py-10 space-y-7 ">
    <div className="ser flex justify-center text-4xl font-Roboto text-white ">
      OUR <span className='text-[#183059] '>___ SERVICES</span>
    </div>
    <div className="txt flex justify-center items-center text-xl mt-3 p-10 m-10 text-[#36151e]">
   
    
Welcome to [IMAD-UD-DIN UZAIR], your destination for cutting-edge web solutions. We specialize in web design, custom development, and responsive design services tailored to your unique needs. Let us bring your vision to life and elevate your online presence to new heights.
<br />
<br />
Experience excellence with our comprehensive suite of services designed to exceed your expectations.
    </div>
   </div>
   <div className="1service flex justify-left items-center bg-[#ece9c0] ml-20 size-96 w-1/2 ">
    <div className="p1 w-1/3 mt-20">
    <img className='size-60 -rotate-45 rounded-full border-6 border-yellow-500' src={ser1} alt='' />
    </div>
    <div className="icon1 w-1/3 flex-col">
      <h1 className='animate-bounce text-[#183059] text-4xl font-Roboto ml-16 mb-16 py-10'>WEB Designing</h1>
    <FontAwesomeIcon className='size-28 ml-10 mb-28' icon={faDoorOpen} />
    </div>
    <div className="desc1 w-1/3 mt-20 font-Roboto ">
    Transform your online presence with our cutting-edge web design service. We specialize in creating stunning, user-friendly websites that captivate your audience and drive results. Let our team of experts bring your vision to life and elevate your brand to new heights
    </div>
   </div>
   {/* secondservice */}
   <div className="1service flex justify-self-center .. ml-96 items-center bg-[#ece9c0] size-96 w-1/2 mt-20 ">
    <div className="p1 w-1/3 mt-20">
    <img className='size-60 -rotate-45 rounded-full border-6 border-yellow-500' src={ser2} alt='' />
    </div>
    <div className="icon1 w-1/3 flex-col">
      <h1 className='animate-bounce text-[#183059] text-4xl font-Roboto ml-10 mb-16 py-10'>Custom Developmet</h1>
    <FontAwesomeIcon className='size-28 ml-10 mb-28' icon={faDoorOpen} />
    </div>
    <div className="desc1 w-1/3 mt-20 font-Roboto ">
    Unlock limitless possibilities with our bespoke custom development service. Tailored to your unique needs, we craft robust solutions that propel your business forward. From intricate web applications to seamless integrations, trust us to deliver excellence every step of the way
    </div>
   </div>
   {/* 3rdservice */}
   <div className="1service flex justify-left items-center bg-[#ece9c0] ml-20 size-96 w-1/2 mt-20 h-auto">
    <div className="p1 w-1/3 mt-20">
    <img className='size-60 -rotate-45 rounded-full border-6 border-yellow-500' src={ser3} alt='' />
    </div>
    <div className="icon1 w-1/3 flex-col">
      <h1 className='animate-bounce text-[#183059] text-4xl font-Roboto ml-8 mb-20 py-10'> Responsive <span className='text-2xl '>Web Designing</span></h1>
    <FontAwesomeIcon className='size-28 ml-10 mb-28' icon={faDoorOpen} />
    </div>
    <div className="desc1 w-1/3 mt-20 font-Roboto ">
    Empower your brand with our responsive web design service, ensuring seamless user experiences across all devices. We craft visually stunning websites that adapt effortlessly to desktops, tablets, and mobiles, enhancing accessibility and engagement. Elevate your online presence with our tailored solutions designed for today's dynamic digital landscape.
    </div>
   </div>
<br />
<br />
<br />
<Footer />
    </div>
  )
}

export default Service
