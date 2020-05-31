import React from 'react';
import './style.scss';
import cart from '../../images/add to cart.png';
import view from '../../images/view-product.png';
import favorite from '../../images/favorite.png';

class Card extends React.Component {

  render() {
    return <div className="card-body" >
      <div className="card-image">
        <div className="sale-div" style={{ display: this.props.sale === true ? 'flex' : 'none' }}>{this.props.saleQuantity}</div>
        <div className="overlay">
          <div className="overlay-inner">
            <div>
              <img src={cart} alt="cart" style={{ margin: '5px', cursor: 'pointer' }} />
              <img src={favorite} alt="favorite" style={{ margin: '5px', cursor: 'pointer' }} />
              <img src={view} alt="view" style={{ margin: '5px', cursor: 'pointer' }} />
            </div>
            <div className="colors-div">
              <div className="circle" style={{ backgroundColor: 'black' }} />
              <div className="circle" style={{ backgroundColor: '#3F308E' }} />
              <div className="circle" style={{ backgroundColor: '#CC0000' }} />
            </div>
          </div>
        </div>
        <img src={this.props.image} alt="imageMen" style={{ width: '100%' }} />
      </div>
      <div className="card-body" style={{ width: '100%' }}>
        <img src={this.props.imageBrand} alt="imageBrand" className="brand-style" />
        <span className="details-span">{this.props.details}</span>
        <span className="price-span"
          style={{ color: this.props.sale === true ? 'red' : 'black' }}>{this.props.price}
          <span className="old-price"
            style={{ display: this.props.sale === true ? 'flex' : 'none' }}>{this.props.oldPrice}</span></span>
      </div>
    </div>
  }
}

export default Card;