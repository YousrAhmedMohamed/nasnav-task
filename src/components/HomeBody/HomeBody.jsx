import React from 'react';
import Group1 from '../../images/Group 312.png';
import Group2 from '../../images/Group 311.png';
import NewArrival from '../NewArrival';
import Adidas from '../../images/Adidas_Logo.svg.png';
import DC from '../../images/DC-Logo.png';
import Vans from '../../images/vans-logo.png';
import Levis from '../../images/Levis-Logo-1.png';
import men1 from '../../images/AdobeStock_1.png';
import men2 from '../../images/AdobeStock_2.png';
import men3 from '../../images/AdobeStock_3.png';
import men4 from '../../images/AdobeStock_4.png';
import Pants from '../../images/Group 308.png';
import accessories from '../../images/Group 310.png';
import clothes from '../../images/clothes-type.png';
import jackets from '../../images/Group 309.png';
import kids from '../../images/kids.png';
import shoes from '../../images/shoes.png';
import bags from '../../images/bags.png';
import Types from '../Types';
import Card from '../Card';
import './style.scss';

class HomeBody extends React.Component {
  render() {
    return <div className="home-body">
      <div className="section-body">
        <img src={Group1} alt="Group1" style={{ width: '50%' }} />
        <img src={Group2} alt="Group2" style={{ width: '50%' }} />
      </div>
      <span className="title-span">New Arrival Brands</span>
      <div className="section-body" style={{ marginBottom: '10px' }}>
        <NewArrival imageBrand={Adidas} name="ADIDAS" />
        <NewArrival imageBrand={Vans} name="Vans" />
        <NewArrival imageBrand={Levis} name="Levi’s" />
        <NewArrival imageBrand={DC} name="DCSHOECOUSA" />
      </div>
      <div className="paging-section">
        <div className="paging" />
        <div className="paging" style={{ backgroundColor: "#D6D6D6" }} />
        <div className="paging" style={{ backgroundColor: "#D6D6D6" }} />
      </div>
      <span className="title-span">Men New Arrival</span>

      <div className="section-body">
        <Card image={men1} imageBrand={Levis} details="Loose Textured T-Shirt" price="EGP 90.99" />
        <Card image={men2} imageBrand={Adidas} details="Basic Slim Fit T-Shirt" price="EGP 79.99" />
        <Card image={men3} imageBrand={Vans} details="Loose Knit 3/4 Sleeve" price="EGP 169.99" />
        <Card image={men4} sale={true} oldPrice="EGP 119.99" imageBrand={DC} details="T-Shirt Summer Vibes" price="EGP 89.99" saleQuantity="30%" />
      </div>

      <span className="title-span">Best Selling Items</span>

      <div className="section-body">
        <Card image={men1} imageBrand={Levis} details="Loose Textured T-Shirt" price="EGP 90.99" />
        <Card image={men2} imageBrand={Adidas} details="Basic Slim Fit T-Shirt" price="EGP 79.99" />
        <Card image={men3} imageBrand={Vans} details="Loose Knit 3/4 Sleeve" price="EGP 169.99" />
        <Card image={men4} sale={true} oldPrice="EGP 119.99" imageBrand={DC} details="T-Shirt Summer Vibes" price="EGP 89.99" saleQuantity="30%" />
      </div>


      <div className="section-body">
        <div className="types-section">
          <Types imageType={Pants} typeName="Pants" buttonName="See Collection" />
          <Types imageType={accessories} typeName="Accessories" buttonName="View All" width="127px" />
        </div>
        <div className="types-section">
          <Types imageType={jackets} typeName="Jackets" buttonName="See Collection" />
          <Types imageType={clothes} typeName="Clothes" buttonName="View All" />
          <Types imageType={kids} typeName="Kids" buttonName="View All" />
        </div>
        <div className="types-section" style={{ width: '30%' }}>
          <Types imageType={bags} typeName="Bags" buttonName="View All" />
          <Types imageType={shoes} typeName="Shoes" buttonName="View All" width="127px" />
        </div>

      </div>


      <span className="title-span">Selected Just For You</span>

      <div className="section-body">
        <Card image={men1} imageBrand={Levis} details="Loose Textured T-Shirt" price="EGP 90.99" />
        <Card image={men2} imageBrand={Adidas} details="Basic Slim Fit T-Shirt" price="EGP 79.99" />
        <Card image={men3} imageBrand={Vans} details="Loose Knit 3/4 Sleeve" price="EGP 169.99" />
        <Card image={men4} sale={true} oldPrice="EGP 119.99" imageBrand={DC} details="T-Shirt Summer Vibes" price="EGP 89.99" saleQuantity="30%" />
      </div>

    </div>
  }
}
export default HomeBody;
