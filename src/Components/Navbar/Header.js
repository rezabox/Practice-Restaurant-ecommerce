import React, { useState } from 'react'
// import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss'
import './Header.scss';
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

function Header() { 
  const [navbar,setNavbar] = useState(false);
  const [link,setLink] = useState(false);
  const changeColorNavbar = ()=>{
   if(window.scrollY >= 80){
        setNavbar(true);
        setLink(true)
   }else{
        setNavbar(false);
        setLink(false);
   }
  }  
  window.addEventListener('scroll', changeColorNavbar);

  return (
    <nav>
       <div className='container'>
             <div className={navbar ? 'navbar active' : 'navbar'}>
                  <div className='navbar-header'></div>
                  <div className={styles.navbar}>
                    <div className='right_nav'>
                    <ul id='smooth-scroll' className={styles.navbar_nav}>
                       <li><a href="/" className={link ? 'link active' : ''}>صفحه اصلی</a></li>
                       <li><a href='/FoodOrder' className={link ? 'link active' : ''}>سفارش آنلاین</a></li>
                       <li><a href='/News' className={link ? 'link active' : ''}>اخبار</a></li>
                       <li><a href='/about' className={link ? 'link active' : ''}>درباره ما</a></li>
                       <li><a href='/map' className={link ? 'link active' : ''}>ارتباط با ما</a></li>
                    </ul>
                    </div>
                    <div className='left_nav'>
                       <li><a href="/login"  className={link ? 'link active' : ''} ><span><i className="bi bi-person-fill"></i></span>ورود/ثبتنام</a></li>     
                    </div>
               </div>
             </div>
          </div>       
    </nav>
  )
}
export default Header
