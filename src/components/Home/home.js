/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import Navbar1 from "../Head/Header.jsx";

import pic1 from "../pic/b.png";
import pic2 from "../pic/b.png";
import pic3 from "../pic/newhtml.svg";
import pic4 from "../pic/newcss.svg";
import pic5 from "../pic/new js.svg";
import pic6 from "../pic/react.svg";

const home = () => {
  return (
    <section classname="hero" id="home">
      <Navbar1 />
      <div className="container f_flex top">
        <div className="left top">
          <h2>
            Hi, I'm <div className="test1">Vinath Satharasinghe</div>
          </h2>
          <h2>
            <div className="test1">
              <Typewriter
                words={["Professional Coder.", "Web Developer"]}
                loop={500}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </h2>

          <p>
            I am Vinath Satharasinghe who aims to be able to find and
            challenging front-end web developer position in the software
            engineer industry with proven leadership skills, seeking an
            internship opportunity in the field of software engineering.
          </p>

          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>FIND ME</h4>

              <br />
              <div className="button">
                <button className="btn_shadow">
                  <a href="https://web.facebook.com/vinnath.satharasinghe/?_rdc=1&_rdr">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a href="https://www.youtube.com/channel/UCxDw9rKHEk5m_BRaL9RqFqA">
                    <i className="fab fa-youtube"></i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a href="https://www.instagram.com/winny_satharasinghe/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a href="https://www.linkedin.com/in/vinnath-satharasinghe-663642231/?locale=zh_CN">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </button>
                <h5 className="aa">Downlord My CV</h5>
              </div>
            </div>

            <div className="col_1">
              <h4>BEST SKILL ON</h4>
              <br />
              <button className="btn_shadow">
                <img src={pic3} alt="" />
              </button>
              <button className="btn_shadow">
                <img src={pic4} alt="" />
              </button>
              <button className="btn_shadow">
                <img src={pic5} alt="" />
              </button>
              <button className="btn_shadow">
                <img src={pic6} alt="" />
              </button>
              <br />

              <a href="cv.pdf" download="cv.pdf">
                <button className="btn_cv">
                  <img src={pic6} alt="" />
                </button>
              </a>
            </div>

            <div className="right">
              <div className="right_img">
                <img src={pic1} alt="" />
              </div>
            </div>

            <div className="test">
              <div className="test_img">
                <img src={pic2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default home;
