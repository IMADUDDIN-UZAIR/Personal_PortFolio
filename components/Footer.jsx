import React from 'react'
import p1 from './assets/logo.png'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex justify-evenly p-20 space-x-20 bg-gradient-to-r from-yellow-400'>
        <div className="logo">
            <img className=' rounded-4xl border-8 border-gradient-to-r' src={p1} alt='' height={100} width={100} />

        </div>
        <div className="lis space-y-10 ml-48">
            <span className='font-Roboto text-black text-2xl '>Quick Links</span>
            <ul>
                <li className='font-Roboto text-black'><NavLink  to="/">Home</NavLink></li>
                <li className=' font-Roboto text-black'><NavLink  to="/About">About</NavLink></li>
                <li className=' font-Roboto text-black'><NavLink  to="/Contact">Contact</NavLink></li>
                <li className=' font-Roboto text-black'><NavLink  to="/Service">Service</NavLink></li>
               
            </ul>
        </div>
        <div className="loc mt-2">
        <div class="">
                    <h5 class=" mb-4 font-Roboto text-black text-2xl ml-52">Newsletter</h5>
                    <p className='ml-52'>Here is a Breaking News!</p>
                  </div>
                  <div className="inp ml-52 mt-8">
                    <form action="">
                        <div className="in  font-Roboto text-xl font-bold  border-2 rounded-2xl border-[#2f1b47]   p-2 flex">
                        <input className=' font-Roboto text-xl font-bold  border-2 rounded-2xl border-[#2f1b47]  p-2' type='text' name='inp' placeholder='Enter Email' /> 
                        <div className=" font-Roboto text-xl font-bold  border-2 rounded-2xl border-[#2f1b47] p-2">sign-up</div>

                        </div>
                    </form>
                  </div>
    </div>
    </div>

  )
}

export default Footer
