import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-item">
        <h4>Game Shop</h4> 
          <p>
            website is a resume project designed and built by
            <span>Mehran Soufi</span>. In this website, it is possible to create
            a user account and add products to the shopping cart and wish list.
            Also, users can edit their account information if needed. All the
            order registration processes on this website are done completely,
            but it is obvious that the goods are not sent. I hope you enjoy this
            project.
          </p>
        </div>
        <div className="footer-item">
          <h4>Contact us</h4>
          <div className="contact-item">
            <i className="fa-solid fa-phone-flip"></i>
            <p>09213821172</p>
          </div>
          <div className="contact-item">
          <i className="fa-solid fa-envelope"></i>
            <p>mehransoufi1@gmail.com   </p>
          </div>
        </div>
        <div className="footer-item">
        <h4>Subscribe to Newsletter</h4>
        <div className="newsletter">
            <input type="email" placeholder="Enter your email..." />
            <button>Subscribe</button>
        </div>
        </div>
      </div>
      <div className="footer-nav">
        <h3>
            All rights reserved
            <i className="fa-regular fa-copyright"></i>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
