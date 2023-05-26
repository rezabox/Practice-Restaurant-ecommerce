import React, { useState } from 'react'
import styles from './auth.module.scss';
import { auth } from "../../firebase/config";
import { sendPasswordResetEmail } from 'firebase/auth';
import Swal from "sweetalert2";
function Reset() {
  const [email, setEmail] = useState('');
  const resetPassword = (e) => {
       e.preventDefault();
       sendPasswordResetEmail(auth, email)
       .then(()=>{
        Swal.fire({
          title:"ایمیل با موفقیت ساخته شد",
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer:3000,
          toast:true,
          position:'top',
      }) 
       })
       .catch((error)=> {
        Swal.fire({
          title:"ارسال ایمیل با خطا مواجه شد.",
          icon:"error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer:3000,
          toast:true,
          position:'top',
      })  
       })
  }
  
  return (
    <section className={styles.row}>
      <card className={styles.cards}>
        <div className="form">
          <form onSubmit={resetPassword}>
            <h1>فراموش کردن پسورد</h1>
            <input type="text" placeholder="ایمیل" value={email} onChange={(e)=> setEmail(e.target.value)} required />
            <button className={styles.btn}>بازیابی پسورد</button>
          </form>
        </div>
      </card>
          <br/>
    </section>
  )
}

export default Reset

