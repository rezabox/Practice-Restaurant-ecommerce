import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss'

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

function Header() {
  return (
    <nav>
       <div className='container'>
          <div className='row p-7'>
             <div className='navbar'>
                  <div className='navbar-header'></div>
                  <div className={styles.navbar}>
                    <div className='right_nav'>
                    <ul id='smooth-scroll' className={styles.navbar_nav}>
                       <li><a href="/">صفحه اصلی</a></li>
                       <li><a href='/FoodOrder' className='mr-3'>سفارش آنلاین</a></li>
                       <li><a href='/News'>اخبار</a></li>
                       <li><a href='/about'>درباره ما</a></li>
                       <li><a href='/map'>ارتباط با ما</a></li>
                    </ul>
                    </div>
                    <div className='left_nav'>
                       <li><a href="/login"><span><i className="bi bi-person-fill"></i></span>ورود/ثبتنام</a></li>     
                    </div>
               </div>
             </div>
          </div>   
       </div>    
    </nav>
  )
}
export default Header
