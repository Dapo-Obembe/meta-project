import React from 'react';
import GreekSalad from '../assets/img/greek-salad.jpg'
import Bruchetta from '../assets/img/bruchetta.svg';
import LemonDesert from '../assets/img/lemon-dessert.jpg';
import '../assets/css/specials.css';



function Specials() {
  return (
      <>
          <section className='specials'>
              <div className='specials__container'>
                  <div className='specials__title'>
                      <h2>This Week's Specials</h2>
                      <button>Online Menu</button>
                  </div>
                  <div className='specials__items--wrapper'>
                      <div className='specials__items'>
                      <div className='specials__items--single'>
                          <img src={GreekSalad} alt="" style={{width:'300px', height:'200px', objectFit: 'cover'}}/>
                          <span className='item--title'><h3>Greek Salad</h3><p>$12.00</p></span>
                          <p className='item--description'>Dish's description here</p>
                          <p>Order a Delivery</p>
                      </div>
                  </div>

                  <div className='specials__items'>
                      <div className='specials__items--single'>
                          <img src={Bruchetta} alt="" style={{width:'300px', height:'200px', objectFit: 'cover'}}/>
                          <span className='item--title'><h3>Greek Salad</h3><p>$12.00</p></span>
                          <p className='item--description'>Dish's description here</p>
                          <p>Order a Delivery</p>
                      </div>
                  </div>

                  <div className='specials__items'>
                      <div className='specials__items--single'>
                          <img src={LemonDesert} alt="" style={{width:'300px', height:'200px', objectFit: 'cover'}}/>
                          <span className='item--title'><h3>Greek Salad</h3><p>$12.00</p></span>
                          <p className='item--description'>Dish's description here</p>
                          <p>Order a Delivery</p>
                      </div>
                  </div>
                  </div>
              </div>
      </section>
      </>
  )
}

export default Specials