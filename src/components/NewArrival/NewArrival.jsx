import React from 'react';
import './style.scss';

class NewArrival extends React.Component {
  render() {
    return <div className="new-arrival-body">
      <img src={this.props.imageBrand} alt="brand" />
      <span className="brand-span">{this.props.name}</span>
    </div>
  }
}

export default NewArrival;