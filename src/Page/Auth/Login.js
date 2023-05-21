import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon1 from '../assets/eye-fill.svg';
import icon2 from '../assets/eye-slash-fill.svg';
import { FaGoogle } from "react-icons/fa";
import styles from './auth.module.scss';
const Login = () => {
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
    <section className="row">
      <card className={styles.cards}>
        <div className="form">
          <form>
            <input type="text" placeholder="ایمیل" required />
            <input type={change} placeholder="پسورد" required />
            <span onClick={handleClick}><img src={icon} width={18} /></span>
            <div className={styles.links}>
               <button type="submit">ورود</button>
              <Link to="/reset">بازیابی پسورد</Link>
            </div>
          </form>
          <button className={styles.authLog}><FaGoogle/><span>ورود با حساب گوگل</span></button>
          <span className={styles.register}>
              <p>ثبنتنام نکردم؟</p>
              <Link to='/register'>ثبتنام</Link>
          </span>
        </div>
      </card>
          <br/>
    </section>
  );
}

export default Login;
