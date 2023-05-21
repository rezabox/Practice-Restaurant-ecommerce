import React, { useState } from 'react'
import icon1 from '../assets/eye-fill.svg';
import icon2 from '../assets/eye-slash-fill.svg';
import styles from './auth.module.scss';
import { Link } from 'react-router-dom';
function Register() {
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
          <input type="text" placeholder="ایمیل" required />
          <input type={change} placeholder="پسورد" required />
          <span onClick={handleClick}><img src={icon} width={18} /></span>
          <input type={change} placeholder="تکرار پسورد" required />
          <span onClick={handleClick}><img src={icon} width={18} /></span>
          <div className={styles.links}>
             <button type="submit">ثبنتنام</button>
            <Link to="/reset">بازیابی پسورد</Link>
          </div>
        </form>
      </div>
    </card>
        <br/>
  </section>
  )
}

export default Register
