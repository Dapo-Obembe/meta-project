import React from 'react'
import '../assets/css/hero.css';
import HeroImage from '../assets/img/restaurantfood.jpg';

function Hero() {
  return (
      <>
          <section className='hero'>
              <div className='hero__container'>
                  <div className='hero__col1'>
                      <h1>Little Lemon</h1>
                      <h2>Nigeria</h2>
                      <p>We are a Nigeria-based family restaurant that serves the best dishes to all and sundry.</p>
                      <button className='hero__button'>Reserve a Table</button>
                  </div>
                  <div className='hero__col2'>
                      <img src={HeroImage} alt="restaurant food" style={{width: '300px', height: '300px'}}/>
                  </div>

              </div>
              
      </section>
      </>
  )
}

export default Hero