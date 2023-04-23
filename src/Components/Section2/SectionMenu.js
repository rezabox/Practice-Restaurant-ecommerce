import React from "react";
import ImageLeft from "../../image/leafBL_1.png";
import ImageRight from "../../image/leafBM_1.png";
import Image1 from "../../image/3634.jpg";
import Image2 from "../../image/3620.jpg";
import Image3 from "../../image/gallery3.jpg";
import Image4 from "../../image/gallery4.jpg";
import Image5 from "../../image/gallery5.jpg";
import Image6 from "../../image/gallery6.jpg";
import './SectionMenu.scss';

function SectionMenu() {
  return (
    <section id="gallery_L" className="bg_gallery">
      <img className="image-responsive left" src={ImageLeft} alt="image from gallery" />
      <img className="image-responsive right" src={ImageRight} alt="image from gallery" />
      <div className="gallary-title">
        <div className="row">
          <div className="title_page text-center ">
            <h3 className="aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">گالری</h3>
            <div className="line">
              <span></span>
            </div>
          </div>
        </div>
        <br/>
        <div className="row overflow-hidden">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="box_gallery aos-init aos-animate text-center" data-aos="fade-right" data-aos-duration="2000">
              <div className="spin-effect">
                <img src={Image1} className="image-responsive" alt="pizza1" />
                <div className="text-box">
                    <div className="info-gal">
                      <h4>انواع پیتزا</h4>
                      <span className="separator"></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="box_gallery aos-init aos-animate" data-aos="fade-left" data-aos-duration="2000">
              <div className="spin-effect">
                <img src={Image2} className="image-responsive" alt="berger" />
                  <div className="text-box">
                    <div className="info-gal">
                      <h4>انواع همبرگر</h4>
                      <span className="separator"></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 hidden-xs" id="card_small">
            <div className="box_gallery aos-init aos-animate" data-aos="fade-left" data-aos-duration="1500">
              <div className="spin-effect">
                <img
                  src={Image3}
                  className="image-responsive"
                  alt="Sandwitch"
                />
                  <div className="text-box">
                    <div className="info-gal">
                      <h4>انواع پیتزا</h4>
                      <span className="separator"></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12" id="card_small">
            <div className="box_gallery aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
              <div className="spin-effect">
                <img src={Image4} className="image-responsive" alt="chicken" />
                <div className="text-box">
                    <div className="info-gal">
                      <h4>انواع کنتاکی</h4>
                      <span className="separator"></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 hidden-xs" id="card_small">
            <div className="box_gallery aos-init aos-animate" data-aos="fade-left" data-aos-duration="1500">
              <div className="spin-effect">
                <img src={Image5} className="image-responsive" alt="pizza" />
                <div className="text-box">
                    <div className="info-gal">
                      <h4>انواع پیتزا</h4>
                      <span className="separator"></span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 hidden-xs" id="card_small"> 
            <div className="box_gallery aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">
              <div className="spin-effect">
                <img src={Image6} className="image-responsive" alt="pizza" />
                <div className="text-box">
                    <div className="info-gal">
                      <h4>انواع پیتزا</h4>
                      <span className="separator"></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMenu;
