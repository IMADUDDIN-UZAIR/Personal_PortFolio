import React from 'react'
import port from './assets/portfolio.jpg'
const Her02 = () => {
  return (
    <div className="main flex justify-around space-x-20 bg-gradient-to-r from-yellow-500 bg-cover h-80">
    <div className="min-h-screen flex flex-col h-20 justify-center items-center space-y-20 ">
        {/* <div className="hrd h1 text-6xl font-Roboto text-bold drop-shadow-md text-center flec justify-center items-center animate-pulse ml-96 ">About me</div> */}
    <div id="miniproject mt-80">
      <div id="upper" className="flex justify-center items-center gap-10">
        <div className="upper1 text-3xl font-bold text-gray-700 animate-spin   ">Intelligence</div>
        <div className="upper1 text-3xl font-bold text-gray-700 animate-spin  ">Desciplined</div>
      </div>
      <div id="center" className="flex justify-center items-center">
        <div id="loader" className="animate-spin text-6xl font-Roboto w-48 h-48 border-8 border-yellow-800 rounded-full flex justify-center items-center">
          {/* <div id="border" className="h-36 w-36 rounded-full border-4 border-yellow-800 relative"> */}
            <div className="text-2xl font-bold font-Roboto text-black absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce ">IMAD</div>
          {/* </div> */}
        </div>
      </div>
      <div id="lower" className="flex justify-center items-center gap-10">
        <div className="upper1 text-3xl font-bold text-gray-700 animate-spin  ">Hardworking</div>
        <div className="upper1 text-3xl font-bold text-gray-700 animate-spin  ">Positive</div>
      </div>
    </div>
  </div>
<div className="para">

    <img className='rounded-full border-8 border-yellow-800 mt-40 ' src={port} alt='' height={300} width={300}  />
</div>



  </div>
  
  )
}

export default Her02
