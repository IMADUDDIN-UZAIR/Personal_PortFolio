import React from 'react'
import { NavLink } from 'react-router-dom'
import p1 from './assets/logo.png'

const Navbar = () => {
  return (
    <div className="maindiv flex justify-between items-center bg-black text-white text-2xl text-bold h-20">
    <div className="logo opacity-90 h-20 bg-cover ml-8 ">
    <img className='border-4 border-yellow-800 rounded-full' src={p1} alt='' relative width={56} height={56} />
    </div>
    <div>
       <ul className='flex justify-center space-x-6 '>
        <li className="hover:text-stone-500 mt-2 border-2 rounded-xl border-yellow-400 p-2"><NavLink exact to="/">Home</NavLink></li>
        <li className="hover:text-stone-500 mt-2 border-2 rounded-xl border-yellow-400 p-2"><NavLink  to="/About">About</NavLink></li>
        <li className="hover:text-stone-500 mt-2 border-2 rounded-xl border-yellow-400 p-2"><NavLink to="/service">Service</NavLink></li>
        <li className="hover:text-stone-500 mt-2 border-2 rounded-xl border-yellow-400 p-2"><NavLink to="/Contact">Contact</NavLink></li>
       
       
    </ul>
    </div>
    <div>
    <a href="/contact" className="btn border-yellow-400 ">Book Appointment</a>

    </div>
    </div>
  )
}

export default Navbar
