import React, { useEffect, useState } from 'react'
import { SliderDate } from './Slider-data'
import './Slider.scss'



function Slider() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderLength = SliderDate.length;
  // const autoSlide = true;
  // let IntervalTime = 6000;
  // let slideInterval;
  
  const nextSlide = ()=>{
     setCurrentSlider(currentSlider === sliderLength - 1 ? 0 : currentSlider + 1);
     console.log(currentSlider);
  }
  const prevSlide = ()=>{
      setCurrentSlider(currentSlider === 0 ? sliderLength - 1 : currentSlider - 1)
      console.log(currentSlider);
  }
  useEffect(()=>{
    setCurrentSlider(0);
  },[])
  return (
    <div className='slider'>
       <i className="bi bi-chevron-right arrow next" onClick={nextSlide}></i>
       <i className="bi bi-chevron-left arrow left" onClick={prevSlide}></i>
       {SliderDate.map((slide, index)=>{
        const { image, heading, desc } = slide;
        return(
        <div key={index} className={index === currentSlider ? "slide current" : "slide"}>
           <img src={image} alt="image slider"/>
           <div className='content'>
             <h1>{heading}</h1>
             <p>{desc}</p> 
           </div>            
        </div>
        )
       })}
    </div>
  )
}

export default Slider
