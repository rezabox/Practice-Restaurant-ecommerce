import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
    return(
        <div className={styles.navbar}>
           <div className={styles.users}>
              <FaUserCircle size={40} color="#FF9800"/>
              <h4>رضاعصاره</h4>
           </div>
           <nav>
              <ul className={styles.ul}>
                 <li>
                    <NavLink to="/admin/home">
                         خانه
                    </NavLink>
                 </li>
                 <li>
                     <NavLink to="/admin/all-products">
                        تمام محصولات
                     </NavLink>
                 </li>
                 <li>
                     <NavLink to="/admin/add-product/ADD">
                         اضافه کردن محصول
                     </NavLink>
                 </li>
                 <li>
                     <NavLink to="/admin/orders">
                        سفارشات
                     </NavLink>
                 </li>
              </ul>
           </nav>
        </div>
    );
}; 
export default Navbar;