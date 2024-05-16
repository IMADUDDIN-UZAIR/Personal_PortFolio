import React from 'react'
import Her02 from '../Her02'
// import bgimg from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/bg.png'
// style={{ backgroundImage: `url(${bgimg})` }}
import Resume from '../Resume'
import Picture from '../../Picture'
import Footer from '../Footer'


const About = () => {
  return (
    <div className="main   bg-[#c9c0bb] bg-cover  overflow-hidden" >
    
      <Her02 />
      <div className="hrd h1 text-6xl font-bold font-Roboto text-bold drop-shadow-md text-center flex justify-center items-center animate-pulse pt-28 ">About me</div>
      <div className="dec text-bold font-Roboto text-2xl mt-12 flex justify-center m-12">
      Hello and welcome to my portfolio website! My name is Imad-ud-din Uzair, and I'm a passionate 23-year-old individual with a strong background in Computer Science. I recently embarked on a journey into the world of full-stack web development through Atom Can's comprehensive month-long course, and I'm thrilled to share my progress with you.
      </div>
      <Picture />
    <Resume />
    <br />
    <br />
    <br />
    <Footer />
    </div>
  )
}

export default About
