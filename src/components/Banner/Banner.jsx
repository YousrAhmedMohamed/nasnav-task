import React from 'react';
import BannerImg from '../../images/banner-1.png';
import circle from '../../images/back-circle.png';
import arrow from '../../images/arrow.png';
import Slider from '../../images/Slider.png';
import './style.scss';
class Banner extends React.Component {
  render() {
    return <div
      className="banner-back"
      style={{
        backgroundImage: `url(${BannerImg})`
      }}>
      <div className="all-you-need-div">
        <span className="all-you-need">All You</span>
        <span className="all-you-need">Need In</span>
        <span className="one-place">One Place</span>
        <div className="shop-now-div">
          <div style={{ backgroundImage: `url(${circle})` }} className="circle-back">
            <img src={arrow} alt="arrow" />
          </div>
          <span className="shop-now-span">Shop now</span></div>
      </div>
      <div className="footer-header">
        <img src={Slider} alt="slider" style={{ width: '81px', height: '81px' }} />
        <div className="footer-text-div">
          <div className="footer-spans">
            <span className="right-footer">WE ARE MORE THAN A BUSINESS</span>
            <span className="left-footer">
              We are more than a business,
              we are an en extended family of young, open minded,
              ambitious and always enthusiastic experts with various background.
              We are more than a business, we are an en extended family of young, open minded,
              ambitious and always enthusiastic experts with various background.
            </span>
          </div>
        </div>
      </div>
    </div>
  }
}
export default Banner;