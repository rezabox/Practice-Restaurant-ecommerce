import React from "react";
import "./SectionNews.scss";
import image1 from "../../image/News1.jpg";
import image2 from "../../image/News2.jpg";
import image3 from "../../image/News3.jpg";

function SectionNews() {
  return (
    <section id="news">
      <div className="bgContainer">
        <div className="divback"></div>
        <div className="events">
          <div className="title_page2 text-center">
            <h3 className="aos-init aos-animate mt-20" data-aos="fade-down" data-aos-duration="1000">رویداد های اخیر</h3>
            <div className="line">
              <span></span>
            </div>
          </div>
          <div className="row2">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="box_blog">
                <div className="img">
                  <a>
                    <img src={image3} alt="از همیشه به شما نزدیکتریم" />
                    <div className="on">
                      <h3>از همیشه به شما نزدیکتریم</h3>
                    </div>
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="box_blog">
                <div className="img">
                  <a>
                    <img src={image2} alt="از همیشه به شما نزدیکتریم" />
                    <div className="on">
                      <h3>پيتزا پاييز برند محبوب جنوب تهران </h3>
                    </div>
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="box_blog">
                <div className="img">
                  <a>
                    <img src={image1} alt="از همیشه به شما نزدیکتریم" />
                    <div className="on">
                      <h3>آغاز به كار سفارش اينترنتی</h3>
                    </div>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionNews;
