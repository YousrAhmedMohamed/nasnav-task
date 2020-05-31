import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import HomeBody from '../../components/HomeBody';
import './style.scss';

class HomePage extends React.Component {
  render() {
    return <div className="home-page">
      <Header />
      <Banner />
      <HomeBody />
    </div>
  }
}

export default HomePage;
