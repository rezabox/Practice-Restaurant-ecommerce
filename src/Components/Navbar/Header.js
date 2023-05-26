import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import "./Header.scss";


function Header() {
  const [navbar, setNavbar] = useState(false);
  const [link, setLink] = useState(false);
  const [arrowTop, setArrowTop] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  return (
    <nav>
      <div className="container">
        <div className={navbar ? "navbar active" : "navbar"}>
          <div className="navbar-header"></div>
          <div className={styles.navbar}>
            <div className="right_nav">
              <ul
                id="smooth-scroll"
                className={showMenu ? "navbar_nav active" : "navbar_nav"}
              >
                <li className={link ? "link activeLink" : ""}>
                  <NavLink to="/" >
                    صفحه اصلی
                  </NavLink>
                </li>
                <li className={link ? "link active" : ""}>
                  <NavLink to="/FoodOrder" >
                    سفارش آنلاین
                  </NavLink>
                </li>
                <li className={link ? "link active" : ""}>
                  <NavLink to="/News">
                    اخبار
                  </NavLink>
                </li>
                <li className={link ? "link active" : ""}>
                  <NavLink to="/about">
                    درباره ما
                  </NavLink>
                </li>
                <li className={link ? "link active" : ""}>
                  <NavLink to="/connect"  >
                    ارتباط با ما
                  </NavLink>
                </li>
              </ul>
              <button
                className={menuToggle ? "toggle_menu active" : "toggle_menu"}
                onClick={menuShow}
              >
                <i class="bi bi-justify"></i>
              </button>
            </div>
            <div className="left_nav">
              <li  className={link ? "link active" : ""}>
                <NavLink to="/login">
                  <span>
                    <i className="bi bi-person-fill"></i>
                  </span>
                  ورود/ثبتنام
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
