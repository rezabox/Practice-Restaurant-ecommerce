import React, { useEffect } from 'react'
import './Section.scss';
import Image1 from "../../image/Ham.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Section() {
  useEffect(()=>{
      AOS.init({duration: 2000});
  }, []);
  return (
      <section id='order_L' className='bg_order'>
         <div className="smooth-scroll" id='smooth-scroll'>
            <a className='link_button' href='#order_L'>
              <i class="bi bi-chevron-down"></i>
            </a>
         </div>
         <div className='container'>
            <div className='row'>
              <div className='online_order'>
                <img src={Image1} alt="png image" data-aos="fade-left" />
                <p className='data-world' data-aos="fade-up">
                وقت رو هدر نده
                 <br/>
                همین الان آنلاین سفارش بده 
                </p>
                <a className='btn btn_orang' href='/FoodOrder' data-aos="fade-right">
                    <span>
                       سفارش آنلاین 
                    </span>
                </a>
              </div>
            </div>
         </div>
      </section>
  )
}
export default Section
