import React from 'react'
import Slider from "react-slick";
import b1 from './components/assets/b1.jpg'
import b2 from './components/assets/b2.jpg'
import b3 from './components/assets/b3.jpg'
// import b4 from './components/assets/b4.jpg'

const Picture = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className=''>
       <Slider className='space-x-28' {...settings}>
      <div>
     <img className='border-8 border-yellow-800 rounded-8xl size-60' src={b1} alt='' height={200} width={200}/>
      </div>
      <div>
     <img className='border-8 border-yellow-800 rounded-8xl size-60' src={b2} alt='' height={300} width={200} />
      </div>
      <div>
     <img className='border-8 border-yellow-800 rounded-8xl size-60' src={b3} alt='' height={200} width={200}/>
      </div>
     
    
    </Slider>
    </div>
  )
}

export default Picture
