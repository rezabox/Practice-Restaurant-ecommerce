import React from "react";
import './FooterPage.scss';
import Image1 from "../../image/leafBL_1.png";
function FooterPage() {
  return (
    <footer className="bg_footer">
      <div className="container">
      <div className="footer_map">
        <div className="location">
          <iframe
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%20%D9%87%D8%A7%D8%AA%20%D8%AF%D8%A7%DA%AF%20%D9%85%D8%B3%D8%B9%D9%88%D8%AF+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="200"
            frameborder="0"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              area maps
            </a>
          </iframe>
        </div>
      </div>
     <div className="footer_address">
        <div className="link_footer">
           <img className="img-responsive leafBL" src={Image1}  alt="" />
           <h3 className="title">فست فود صادقیه</h3>
           <ul className="contact">
             <li>
              <i class="bi bi-geo-alt"></i>
              <span>نشانی:</span>
              <span>فلکه دوم صادقیه . ابتدای ستارخان . بلوار شهدا جنوبی  پلاک 41</span>
              </li>
              <li>
              <i class="bi bi-telephone-fill"></i>
              <span>نشانی:</span>
              <span>فلکه دوم صادقیه . ابتدای ستارخان . بلوار شهدا جنوبی  پلاک 41</span>
              </li>
           </ul>
        </div>
     </div>
    </div>
    </footer>
  );
}

export default FooterPage;
