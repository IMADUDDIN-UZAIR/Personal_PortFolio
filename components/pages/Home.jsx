import React from 'react'
import Hero from '../Hero'
import Project from '../Projects'
// import bgimg from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/bg.png'
// style={{ backgroundImage: `url(${bgimg})` }}

import Footer from '../Footer'
import merit from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/meritcer.jpg'
import ft from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/footbal.jpg'
import com from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/comserprog.jpg'
import eng from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/endpro.jpg'
import dit from 'C:/Users/PMLS/Desktop/fullstack/chatbot_prac/practice/src/components/assets/dit.jpg'


const Home = () => {
  return (
    <div className='bg-[#c9c0bb]  text-black  bg-cover ' >
     <Hero />
     <br />
   
    
     <div className="h1 text-6xl font-Roboto text-bold drop-shadow-md text-center mt-16">Projects  </div>
     <div className='text-bold font-Roboto text-2xl mt-12 flex justify-center m-12'>Embark on a journey of endless possibilities in full-stack development! With each project, we're crafting innovative solutions, pushing boundaries, and shaping the future of technology. Join us as we harness the power of frontend magic and backend brilliance to create transformative experiences. Together, let's build a brighter tomorrow, one line of code at a time. </div>

<br />
<br />
<br />
<Project />
<br />
<br />
<br />
<br />
<br />
<div className="h1 text-6xl font-Roboto text-bold drop-shadow-md text-center mt-44  ">
  My Accompolishments
  </div>
  <div className="cer text-bold font-Roboto text-2xl mt-12  justify-center m-12">
  In the realm of curriculum activities, I hold a plethora of achievements, including a Football Championship certificate and numerous merit certificates, reflective of my dedication and excellence. Additionally, I have actively participated in community service programs, earning recognition through certificates for my impactful contributions.

Moreover, my professional journey boasts significant milestones. With a year-long tenure as a Design Engineer in the Pakistani Force, I honed my skills and contributed meaningfully to vital projects. Presently, I'm engaged in a pivotal role in AtomCamp, specializing in months' development, further enriching my expertise and experience in this domain.

I am proud to hold six certificates of excellence, validating my proficiency and commitment in various spheres. Notably, one such recognition is the Community Service Program certificate, bestowed by the esteemed University of Peshawar.

Furthermore, my educational pursuits include a Diploma in IT, ensuring a strong foundation in technological advancements, and an English proficiency certificate, facilitating effective communication across diverse platforms. Additionally, I am licensed to operate Light Transport Vehicles (LTV), demonstrating versatility and practical skills beyond conventional domains.

Collectively, these accomplishments underscore my multifaceted capabilities and unwavering dedication to continuous growth and contribution in both professional and community-oriented endeavors.
<br />
<br />
<br />
<span className='font-bold text-2xl flex justify-center font-Roboto'>Some of Accomplishments List are:</span>
</div>
<div className="l flex justify-evenly p-26 items-center space-x-10">
  <div className="cer1">
    <img className='border-8 rounded-full border- border-yellow-400' src={merit} alt='' height={600} width={600} />
    <span className='font-bold text-xl flex justify-center font-Roboto mt-6'>Alhamdulillah i have 6 merit certificates</span>
  </div>
  <div className="cer1">
    <img className='border-8 rounded-full border- border-yellow-400' src={ft} alt='' height={600} width={600}/>
    <span className='font-bold text-xl flex justify-center font-Roboto mt-6'>North-Zone football Championship </span>
  </div>
  <div className="cer1">
    <img className='border-8 rounded-full border- border-yellow-400' src={com} alt='' height={600} width={600} />
    <span className='font-bold text-xl flex justify-center font-Roboto mt-6'>Participated in Community Programs</span>
  </div>
 


</div>
<div className="secdiv flex justify-evenly p-26 items-center mt-10">
<div className="cer1">
    <img className='border-8 rounded-full border- border-yellow-400' src={dit} alt='' height={200} width={400} />
    <span className='font-bold text-xl flex justify-center font-Roboto mt-6'>Diploma in Information Technology</span>
  </div>
  <div className="cer1">
    <img className='border-8 rounded-full border- border-yellow-400' src={eng} alt='' height={200} width={400} />
    <span className='font-bold text-xl flex justify-center font-Roboto mt-6'>English Proficiency Certificate</span>
  </div>

</div>





 
  
  <br />
<br />
<br />
   <Footer />
    
     </div>
     

   
  )
}

export default Home
