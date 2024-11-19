import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {

  const [toggleState, settoggleState] = useState(1);

  const toggleTab = (index) =>{
      settoggleState(index);
  }
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ?"qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ?"qualification__button qualification__active button--flex" : "qualification__button button--flex"}
           onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
        <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Technology</h3>
                <span className="qualification__subtitle">GLA University, Mathura </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  May 2020 - Aug 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Application Development </h3>
                <span className="qualification__subtitle">GLA University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Aug 2021
                </div>
              </div>

              

            </div>

            <div className="qualification__data">
              
              <div>
                <h3 className="qualification__title">
                Diploma CS
                </h3>
                <span className="qualification__subtitle">GLA University </span>
                <div className="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                 April 2017 - Fev 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            

     

          </div>



          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Native IOS</h3>
                <span className="qualification__subtitle">SubcoDevs, Inc </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  May 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                React Native
                </h3>
                <span className="qualification__subtitle">Kickr Technology </span>
                <div className="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                 Feb 2023 - Fev 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Native</h3>
                <span className="qualification__subtitle">VedangSoft Private Limited</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Feb 2020 - Mar 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

     

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
