import React from 'react'
import p2 from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/dp.jpg'


const Hero = () => {
  return (
    <div className="main bg-gradient-to-r from-yellow-500 bg-cover ">
    <div className=" flex w-full">
       
       <div className="hero mr-28 justify-left">
       <div className='mt-10  font-Roboto text-3xl text-bold bg-gradient-to-r from-indigo-500 ...  text-[#e6f3ef]'>HI There:</div>
        <div className='ml-10 mt-2 font-Roboto text-3xl text-bold bg-gradient-to-r from-indigo-500 ...  '>I'm Imad-ud-din Uzair</div>
        {/* <div className='ml-60 mt-2 font-Roboto text-2xl text-bold bg-gradient-to-r from-indigo-500 ...  '> A Full Stack Developer </div> */}
        <div className=' mt-2 font-Roboto text-4xl text-bold bg-gradient-to-r from-indigo-500 ...  text-[#e6f3ef]'>Creative</div>
        <div className='ml-20 mt-2 font-Roboto text-4xl text-bold bg-gradient-to-r from-indigo-500 ...  text-[#e6f3ef]'>Fronend </div>
        <div className='ml-40 mt-2 font-Roboto text-4xl text-bold bg-gradient-to-r from-indigo-500 ...  text-[#e6f3ef]'>Developer </div>
        <div className='ml-10 mt-2 font-Roboto text-2xl text-bold bg-gradient-to-r from-indigo-500 ...  '>  HTML | CSS | JAVASCRIPT | Tailwind CSS | React.js | Node.js </div>
        <div className="main flex space-x-20 mt-10">
          <div className="email">
            <div className="em text-Roboto text-2xl">
              Email:
              </div>
              <div className=' font-bold text-xl'>imad942069@gmail.com</div>
            </div>
          <div className="email">
            <div className="em text-Roboto text-2xl">
              Phone:
              </div>
              <div className=' font-bold text-xl'>(+92)345-5620623</div>
            </div>
          <div className="email">
            <div className="em text-Roboto text-2xl">
             City:
              </div>
              <div className=' font-bold text-xl'>Peshawar,KP</div>
            </div>
        </div>
      </div>
     
      <div className="img w-1/3 flex justify-end ">
            <img  className="opacity-80 rounded-full border-8 border-gradient-to-r " src={p2} alt='' height={60} width={280}  />
        </div>
     </div>

 
     </div>
  )
}

export default Hero
