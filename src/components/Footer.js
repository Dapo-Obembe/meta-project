import React from "react";
import "../assets/css/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__col1 footer__item">
            <h3>Navigations</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Order Online</li>
              <li>LOGIN</li>
            </ul>
          </div>
          <div className="footer__col2 footer__item">
            <h3>Contact</h3>
            <p>ADDRESS: Dalet Hospital, Sangotedo, Lagos</p>
            <p>EMAIL: info@littlelemon.com</p>
            <p>PHONE: +2348151244131</p>
          </div>
          <div className="footer__col2 footer__item">
            <h3>We are social</h3>
            <div className="footer__socials"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
