import React from 'react';
import logo from '../../images/ra-sport-logo.png';
import search from '../../images/search.png';
import avatar from '../../images/avatar.png';
import cart from '../../images/cart.png';
import './style.scss'
class Header extends React.Component {
  render() {
    return <div className="header-body">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <span className="home-item">Home</span>
        <span className="header-items">Brands</span>
        <span className="header-items">Shop</span>
        <span className="header-items">Store Locators</span>
        <span className="header-items">About Us</span>
      </div>
      <div>
        <img src={search} alt="search" className="img-icon" />
        <img src={cart} alt="cart" className="img-icon" />
        <img src={avatar} alt="avatar" className="img-icon" />
      </div>
    </div>;
  }
}
export default Header;