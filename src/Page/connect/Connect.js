import style from './Connect.module.scss';
const Connect = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.section}>
          <form>
            <card className={style.card}>
              <input type="text" name="user_name" placeholder="نام" required />
              <input type="text" name="user_last" placeholder="نام خانوادگی" required />
              <input type="ایمیل" name="user_email" placeholder="ایمیل" required />
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
