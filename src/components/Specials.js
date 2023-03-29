import React from 'react'

function Specials() {
  return (
      <>
          <section className='specials'>
              <div className='specials__container'>
                  <div>
                      <h2>This Week's Specials</h2>
                      <button>Online Menu</button>
                  </div>
                  <div className='specials__items'>
                      <div className='specials__items--single'>
                          <img src={''} alt="" />
                          <span><h3>Greek Salad</h3><p>$12.00</p></span>
                          <p>Dish's description here</p>
                          <p>Order a Delivery</p>
                      </div>
                  </div>
              </div>
      </section>
      </>
  )
}

export default Specials