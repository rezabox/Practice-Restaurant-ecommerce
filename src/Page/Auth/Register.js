import React, { useState } from 'react'
import icon1 from '../assets/eye-fill.svg';
import icon2 from '../assets/eye-slash-fill.svg';
import styles from './auth.module.scss';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
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
  const registerUser = (e) => { 
      e.preventDefault();
      if(password !== cpassword){
        Swal.fire({
          title:"پسورد ها باهم سازگار نیستند",
          icon: "error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer:3000,
          toast:true,
          position:'top',
          })   
        }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
      Swal.fire({
        title:"اکانت با موفقیت ساخته شد",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer:3000,
        toast:true,
        position:'top',
    })   
    })
    .catch((error)=>{
      Swal.fire({
        title:"اکانت با خطا مواجه شد.",
        icon:"error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer:3000,
        toast:true,
        position:'top',
    })  
    })
  };
  return (
    <section className={styles.row}>
    <card className={styles.cards}>
      <div className="form">
        <form onSubmit={registerUser}>
          <input type="text" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type={change} placeholder="پسورد" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <span onClick={handleClick}><img src={icon} width={18} /></span>
          <input type={change} placeholder="تکرار پسورد" value={cpassword} onChange={(e) => setCPassword(e.target.value)} required />
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
