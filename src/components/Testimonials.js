import React from "react";
import Image1 from "../assets/img/restaurantchief.jpg";
import "../assets/css/testimonials.css";

function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <div className="testimonials__container">
          <h2>Testimonials</h2>
          <div className="testimonials__items">
            <div className="testimonial__box">
              Rating
              <img src={Image1} alt="" style={{ width: "300px" }} />
              <p>Dapo Obembe</p>
            </div>

            <div className="testimonial__box">
              Rating
              <img src={Image1} alt="" style={{ width: "300px" }} />
              <p>Dapo Obembe</p>
            </div>

            <div className="testimonial__box">
              Rating
              <img src={Image1} alt="" style={{ width: "300px" }} />
              <p>Dapo Obembe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
