import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
           <div className="user">
              <FaUserCircle size={40} color="#FF9800"/>
              <h4>رضاعصاره</h4>
           </div>
           <nav>
              <ul>
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