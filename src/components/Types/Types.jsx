import React from 'react';
import './style.scss';
import Button from '../Button';


class Types extends React.Component {

  render() {
    return <div className="types-body">
      <img src={this.props.imageType} alt="brand" className="types-img" />
      <div className="button-and-title">
        <span className="name-span">{this.props.typeName}</span>
        <Button name={this.props.buttonName} width={this.props.width} />
      </div>
    </div>
  }
}

export default Types;