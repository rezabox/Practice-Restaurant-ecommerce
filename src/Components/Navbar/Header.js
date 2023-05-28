import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import "./Header.scss";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [link, setLink] = useState(false);
  const [arrowTop, setArrowTop] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const changeColorNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
      setLink(true);
      setArrowTop(true);
      setMenuToggle(true);
    } else {
      setNavbar(false);
      setLink(false);
      setArrowTop(false);
      setMenuToggle(false);
    }
  };
  window.addEventListener("scroll", changeColorNavbar);
  const menuShow = () => {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  const logoutUser = () => {
    signOut(auth)
    .then((result)=> {
      navigate("/");
      Swal.fire({
        title: "خروج حساب کاربری با موفقیت انجام شد",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    })
    .catch((error)=> {
      Swal.fire({
        title: "خروج حساب کاربری با خطا مواجه شد",
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
    <nav>
      <div className="cat_header">
        <div className={navbar ? "navbar active" : "navbar"}>
          <div className="navbar-header"></div>
          <div className={styles.navbar}>
            <div className="right_nav">
              <ul
                id="smooth-scroll"
                className={showMenu ? "navbar_nav active" : "navbar_nav"}
              >
                <li className={link ? "link active" : "link active"}>
                  <NavLink to="/" >
                    صفحه اصلی
                  </NavLink>
                </li>
                <li className={link ? "link active" : "link active"}>
                  <NavLink to="/FoodOrder" >
                    سفارش آنلاین
                  </NavLink>
                </li>
                <li className={link ? "link active" : "link active"}>
                  <NavLink to="/News">
                    اخبار
                  </NavLink>
                </li>
                <li className={link ? "link active" : "link active"}>
                  <NavLink to="/about">
                    درباره ما
                  </NavLink>
                </li>
                <li className={link ? "link active" : "link active"}>
                  <NavLink to="/connect"  >
                    ارتباط با ما
                  </NavLink>
                </li>
              </ul>
              <button
                className={menuToggle ? "toggle_menu show" : "toggle_menu"}
                onClick={menuShow}
              >
                <li className={link ? "link active" : ""}>
                <i class="bi bi-justify"></i>
                </li>
              </button>
            </div>
            <div className="left_nav flex">
              <li  className={link ? "link active" : "link active"}>
                <NavLink to="/login">
                  <span>
                    <i className="bi bi-person-fill"></i>
                  </span>
                  ورود/ثبتنام
                </NavLink>
              </li>
                    <li className={link ? "link active": "link active"}>
                      <NavLink to='/' >
                        <span className="bg-white px-2 rounded-full mr-5" onClick={logoutUser}>
                        خروج از حساب
                        </span>
                      </NavLink>
                    </li>
                </div>
          </div>
        </div>
      </div>
      <div className={arrowTop ? "arrow2 active1" : "arrow2"}>
        <p id="back-up" className="arrow_top">
          <a href="#">
            <i class="bi bi-chevron-up"></i>
          </a>
        </p>
      </div>
    </nav>
  );
}
export default Header;
