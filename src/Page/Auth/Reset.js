import React from 'react'
import styles from './auth.module.scss';
function Reset() {
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

