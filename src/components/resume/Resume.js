/* eslint-disable array-callback-return */
import React from "react";
import "./resume.css";
import Card from "./recard";
import ResumeApi from "./resumeapi";
import Navbar4 from "../Head/Header4.jsx";

import cer1 from "../../pictures/'pko.png";
import cer2 from "../../pictures/Vinnath_satharasinghe20230623-70-3fpxvx.jpg";
import cer3 from "../../pictures/WEB BEGI.png";
import cer4 from "../../pictures/bi.png";
import cer5 from "../../pictures/data studio.png";
import cer6 from "../../pictures/data studio.png";
import cer7 from "../../pictures/excel.png";
import cer8 from "../../pictures/power users.png";
import cer9 from "../../pictures/wad.png";


const Resume = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <Navbar4 />
        <div className="container top">
          <div className="heading text-center">
            <h4>
              <span>Education</span>
              <span> & </span>
              <span>EXPERIENCE</span>
            </h4>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="content_section d_flex">
            <div className="left">
              <div className="heading">
                {/* <h4>2020-2023</h4> */}
                <h4>EXPERIENCE</h4>
              </div>

              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>

            <div className="left">
              <div className="heading">
                {/* <h4>2020-2023</h4> */}
                <h4>Education Qualification</h4>
              </div>

              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4>
          <span>Certificates</span>
        </h4>
      </section>

      <br />
      <img className="gg" src={cer1} alt="" />
      <img className="gg" src={cer2} alt="" />
      <img className="gg" src={cer3} alt="" />
      <img className="gg" src={cer4} alt="" />
      <img className="gg" src={cer5} alt="" />
      <img className="gg" src={cer6} alt="" />
      <img className="gg" src={cer7} alt="" />
      <img className="gg" src={cer8} alt="" />
      <img className="gg" src={cer9} alt="" />
    </>
  );
};

export default Resume;
