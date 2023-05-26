import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/eye-fill.svg";
import icon2 from "../assets/eye-slash-fill.svg";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import Swal from "sweetalert2";
import styles from "./auth.module.scss";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider 
} from "firebase/auth";
import { auth } from "../../firebase/config";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState("password");
  const [icon, setIcon] = useState(icon2);
  const handleClick = () => {
    if (change === "password") {
      setChange("text");
      setIcon(icon1);
    } else {
      setChange("password");
      setIcon(icon2);
    }
  };
  const loginUser = (e) =>{
   e.preventDefault();
   signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire({
          title: "ورود به حساب کاربری با موفقیت انجام شد",
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "خطا در ورود رخ داد",
          icon: "error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
      });
  };
  
  const providerTwo = new GithubAuthProvider();
  const signInwithGithup = () =>{
     signInWithPopup(auth, providerTwo)
     .then((result)=>{
      Swal.fire({
        title: "ورود به حساب کاربری با موفقیت انجام شد",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
     })
     .catch((error)=>{
      Swal.fire({
        title: "خطا در ورود رخ داد",
        icon: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
     })
  }

  return (
    <section className={styles.row}>
      <card className={styles.cards}>
        <div className="form">
          <form onSubmit={loginUser}>
            <input type="text" placeholder="ایمیل" required />
            <input type={change} placeholder="پسورد" required />
            <span onClick={handleClick}>
              <img src={icon} width={18} />
            </span>
            <div className={styles.links}>
              <button type="submit">ورود</button>
              <Link to="/reset">بازیابی پسورد</Link>
            </div>
          </form>
          <button className={styles.authLog} onClick={signInWithGoogle}>
            <FaGoogle />
            <span>ورود با حساب گوگل</span>
          </button>
          <button className={styles.authLog} onClick={signInwithGithup}>
             <AiOutlineGithub/>
             <span>ورود با حساب گیت هاپ</span>
          </button>
          <span className={styles.register}>
            <p>ثبنتنام نکردم؟</p>
            <Link to="/register">ثبتنام</Link>
          </span>
        </div>
      </card>
      <br />
    </section>
  );
};

export default Login;
