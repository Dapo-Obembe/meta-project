import React from "react";
import AboutImage from "../assets/img/restaurantfood.jpg";
import "../assets/css/about.css";

function About() {
  return (
    <>
      <section className="about">
        <div className="about__container">
          <div className="about__text">
            <h2>About Little Lemon</h2>
            <p>
              We are a Nigeria-based family restaurant that serves the best
              dishes to all and sundry.
            </p>
          </div>
          <div className="about__img">
            <img src={AboutImage} alt="" />
            <img src={AboutImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
