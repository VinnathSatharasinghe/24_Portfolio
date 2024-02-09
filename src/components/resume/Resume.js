/* eslint-disable array-callback-return */
import React from "react";
import "./resume.css";
import Card from "./recard";
import ResumeApi from "./resumeapi";
import Navbar4 from "../Head/Header4.jsx";

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
      </section>
    </>
  );
};

export default Resume;
