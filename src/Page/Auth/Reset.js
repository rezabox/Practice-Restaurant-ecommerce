import React from 'react'
import styles from './auth.module.scss';
import { useState } from "react";
import { Link } from "react-router-dom";
import icon1 from '../assets/eye-fill.svg';
import icon2 from '../assets/eye-slash-fill.svg';
function Reset() {
  const [change,setChange] = useState('password');
  const [icon,setIcon] = useState(icon2);
  const handleClick = () => {
     if(change === 'password'){
        setChange('text');
        setIcon(icon1);
     }else{
        setChange('password');
        setIcon(icon2);
     }
  }
  return (
    <section className={styles.row}>
      <card className={styles.cards}>
        <div className="form">
          <form>
            <h1>فراموش کردن پسورد</h1>
            <input type="text" placeholder="ایمیل" required />
            <button className={styles.btn}>بازیابی پسورد</button>
          </form>
        </div>
      </card>
          <br/>
    </section>
  )
}

export default Reset

