import React from 'react';
import footerImg from '../../images/footer.png';
import logo from '../../images/ra-sport-logo.png';

import Twitter from '../../images/tw.png';
import Youtube from '../../images/youtube.png';
import FB from '../../images/fb.png';
import Insta from '../../images/inst.png';
import Linked from '../../images/linked.png';
import './style.scss';

class Footer extends React.Component {
  render() {
    return <div className="footer-back">
      <div style={{ backgroundImage: `url(${footerImg})` }} className="footer-img">
        <span className="footer-span">
          Subscribe to our newsletter and receive exclusive offers every week
        </span>
        <div className="subscribe-div">
          <div className="subscribe-input">
            <input placeholder="Enter your email" type="text" className="input-email" />
          </div>
          <button
            type="button"
            className="subscribe-button-style"
          >
            <span className="subscribe-button-label">Subscribe</span>
          </button>
        </div>
      </div>
      <div className="footer-details">
        <div className="ra-sport-footer">
          <img src={logo} alt="logo" style={{ width: 'fit-content', marginBottom: '20px' }} />
          <span className="logo-details">Rasport clothing for the young, the old & everyone in between – but most importantly, for the fashionable</span>
          <div className="social-media">
            <img src={Twitter} alt="tw" className="img" />
            <img src={FB} alt="fb" className="img" />
            <img src={Youtube} alt="youtube" className="img" />
            <img src={Linked} alt="linked" className="img" />
            <img src={Insta} alt="insta" className="img" />
          </div>
        </div>
        <div className="about-information">
          <span className="footer-title">Shopping online</span>
          <span className="footer-details-span">Order Status </span>
          <span className="footer-details-span">Shipping and Delivery </span>
          <span className="footer-details-span">Returns</span>
          <span className="footer-details-span">Payment Options</span>
          <span className="footer-details-span">Contact Us</span>
        </div>
        <div className="about-information">
          <span className="footer-title">Information</span>

          <span className="footer-details-span">Gift Cards</span>
          <span className="footer-details-span">Find a store </span>
          <span className="footer-details-span">Blog </span>
          <span className="footer-details-span">Bacome a member</span>
          <span className="footer-details-span">Site feedback</span>

        </div>

        <div className="about-information">
          <span className="footer-title">Contact</span>

          <span className="footer-details-span">store@rasport.com</span>
          <span className="footer-details-span">Hotline: +2 131 138 138</span>
        </div>

      </div>
      <div className="design-by">
        Rasport clothing for the young, the old & everyone in between – but most importantly, for the fashionable
      </div>

    </div>
  }
}

export default Footer;