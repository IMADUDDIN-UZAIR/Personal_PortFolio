// import React from 'react'
// import pic from './assets/cont.jpg'
// import Footer from './Footer'

// const Appointment = () => {
//   return (
//     <div id='khan' className=' space-y-10'>

//         <span className='text-6xl font-bold font-Roboto text-bold drop-shadow-md text-center flex justify-center items-center animate-bounce pt-28'> Appointment Form</span>
//         <div className="div flex justify-evenly space-x-20 p-10">



//         <form action="">
//             <div className="in1 mt-20 flex justify-center items-center">
//             <span className='text-bold text-black text-3xl font-Roboto ml-16'>Name</span><br /><br />
//             <input className='font-Roboto text-xl font-bold  border-1 rounded-2xl border-yellow-800 p-2' type='text' name='name' placeholder='Enter Name' />
          
//             <span className='text-bold text-black text-3xl font-Roboto ml-16'>Email</span><br /><br />
//             <input className='font-Roboto text-xl font-bold  border-1 rounded-2xl border-yellow-800 p-2' type='text' name='name' placeholder='Enter Email' />
          


//             </div>

//             <div className="in1 mt-20 flex justify-center items-center  ">
//             <span className='text-bold text-black text-3xl font-Roboto ml-8'>Phone </span><br /><br />
//             <input className='font-Roboto text-xl font-bold  border-1 rounded-2xl border-yellow-800 p-2 space-x-28' type='number' name='name' placeholder='Enter Number' />
//             <span className='text-bold text-black text-3xl font-Roboto ml-28'>Gender</span><br /><br />
//          <select className='font-Roboto text-xl font-bold  border-1 rounded-2xl border-yellow-800 p-2 mr-36'  name="gender" id="">
//             <option value="">Select Gender</option>
//             <option value="">Male</option>
//             <option value="">Female</option>
//          </select>
//      </div>
//      <div className="btn flex justify-center items-center mt-10">
//      <button className="btn  border-4 rounded-full text-black font-Roboto border-yellow-800 p-5  w-60">
//         Book Appointment
//     </button>
//      </div>

   
//         </form>
//       <div className="div2 mb-20">
//         <img className='border-8 rounded-8xl  border-yellow-800' src={pic} alt='' /> 
//       </div>


//         </div>
//        <Footer />
//     </div>
//   )
// }

// export default Appointment



import React from 'react';
import pic from './assets/cont.jpg';
import Footer from './Footer';

const Appointment = () => {
  return (
    <div id='khan' className='space-y-10'>

      <h1 className='text-6xl font-bold font-Roboto text-bold drop-shadow-md text-center flex justify-center items-center animate-bounce pt-28'>
        Appointment Form
      </h1>

      <div className="flex justify-evenly space-x-20 p-10">

        <form action="" className="flex flex-col justify-center items-center space-y-10">

          <div className="flex flex-col justify-center items-center space-y-5">
            <span className='text-bold text-black text-3xl font-Roboto'>Name</span>
            <input className='input-style' type='text' name='name' placeholder='Enter Name' />

            <span className='text-bold text-black text-3xl font-Roboto'>Email</span>
            <input className='input-style' type='text' name='name' placeholder='Enter Email' />
          </div>

          <div className="flex flex-col justify-center items-center space-y-5">
            <span className='text-bold text-black text-3xl font-Roboto'>Phone</span>
            <input className='input-style' type='number' name='name' placeholder='Enter Number' />

            <span className='text-bold text-black text-3xl font-Roboto'>Gender</span>
            <select className='input-style' name="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="flex justify-center items-center mt-10">
            <button className="btn">
              Book Appointment
            </button>
          </div>

        </form>

        <div className="mb-20">
          <img className='rounded-full border-8 border-yellow-400' src={pic} alt='' height={400} width={400} /> 
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Appointment;

