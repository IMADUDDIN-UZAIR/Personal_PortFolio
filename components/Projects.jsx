import React from 'react'
import pro1 from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/weat.png'
import pro2 from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/chatbot.png'
import pro3 from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/node.png'


const Projects = () => {
  return (
    <div className='bg-gradient-to-r bg-[#c9c0bb]  text-black mt-16'>
      

      <div className="weatherapp  flex justify-between items-center py-10 space-x-4 h-36 mt-60 ">
      <div className="p1 text-center text-bold font-Roboto text-xl ">
      <img className='border-6 rounded-full border-4 border-yellow-400' src={pro1} alt='' />
      <span className=' text-bold font-Roboto text-2xl mt-12 bg-[#c9c0bb] flex justify-center   m-8'>The Weather App is a beginner-friendly project developed using HTML, CSS, and Reactjs. It provides users with real-time weather information based on their location. The app features an attractive and user-friendly interface, allowing users to easily access weather forecasts and updates.</span>
      </div>
      <div className="p1 text-center text-bold font-Roboto text-xl ">
      <img  className='border-6 rounded-full border-4 border-yellow-400' src={pro2} alt='' />
      <span className=' text-bold font-Roboto text-2xl mt-12 bg-[#c9c0bb] flex justify-center m-8'>The Chatbot using Dialogflow is a cutting-edge project showcasing your expertise in conversational AI. Built with Dialogflow and integrated into your website, this chatbot provides users with real-time assistance and engages in natural language conversations. It demonstrates your ability to implement advanced technologies to enhance user interactions.</span>
      </div>
      <div className="p1 text-center text-bold font-Roboto text-xl  ">
      <img  className='border-6 rounded-full border-4 border-yellow-400' src={pro3} alt='' />
      <span className='text-bold font-Roboto text-2xl mt-12 bg-[#c9c0bb] flex justify-center m-8'>The Greetings Using Node.js project is a small yet impactful demonstration of server-side scripting using Node.js. It dynamically generates personalized greetings based on user input, providing a delightful and interactive user experience.</span>
      </div>
   
     </div>
    </div>
  )
}

export default Projects
