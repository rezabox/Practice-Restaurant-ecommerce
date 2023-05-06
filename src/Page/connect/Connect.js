import style from "./Connect.module.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Connect = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mtdc3tq",
        "template_igry7up",
        form.current,
        "wsZ2TtVela5Wma8lu"
        )
        Swal.fire({
          title:"پیام باموفقیت ارسال شد.",
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer:3000,
          toast:true,
          position:'top',
      })    
  };

  return (
    <section>
      <div className={style.container}>
        <div className={style.section}>
          <form ref={form} onSubmit={sendEmail}>
            <card className={style.card}>
              <input type="text" name="user_name" placeholder="نام" required />
              <input
                type="text"
                name="user_last"
                placeholder="نام خانوادگی"
                required
              />
              <input
                type="text"
                name="user_email"
                placeholder="ایمیل"
                required
              />
              <label>پیام</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
              <button className={style.sendbtn}>ارسال</button>
            </card>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Connect;
