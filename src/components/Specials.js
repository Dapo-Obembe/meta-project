import React from "react";
import GreekSalad from "../assets/img/greek-salad.jpg";
import Bruchetta from "../assets/img/bruchetta.svg";
import LemonDesert from "../assets/img/lemon-dessert.jpg";
import Basket from "../assets/img/Basket.svg";
import "../assets/css/specials.css";

function Specials() {
  return (
    <>
      <section className="specials">
        <div className="specials__container">
          <div className="specials__title">
            <h2>This Week's Specials</h2>
            <button>Online Menu</button>
          </div>
          <div className="specials__items--wrapper">
            <div className="specials__items">
              <div className="specials__items--single">
                <img src={GreekSalad} alt="" />
                <span className="item--title">
                  <h3>Greek Salad</h3>
                  <p className="item--price">$12.00</p>
                </span>
                <div>
                  <p className="item--description">Dish's description here</p>
                  <button className="item--orderBtn">
                    Order a Delivery{" "}
                    <img
                      src={Basket}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="specials__items">
              <div className="specials__items--single">
                <img src={Bruchetta} alt="" />
                <span className="item--title">
                  <h3>Greek Salad</h3>
                  <p>$12.00</p>
                </span>
                <div>
                  <p className="item--description">Dish's description here</p>
                  <button className="item--orderBtn">
                    Order a Delivery{" "}
                    <img
                      src={Basket}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="specials__items">
              <div className="specials__items--single">
                <img src={LemonDesert} alt="" />
                <span className="item--title">
                  <h3>Greek Salad</h3>
                  <p>$12.00</p>
                </span>
                <div>
                  <p className="item--description">Dish's description here</p>
                  <button className="item--orderBtn">
                    Order a Delivery{" "}
                    <img
                      src={Basket}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specials;
