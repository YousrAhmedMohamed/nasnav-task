import React from 'react';
import './style.scss';

class Button extends React.Component {
  render() {
    return <button
      type="button"
      className="button-style"
      style={{ minWidth: this.props.width }}
    >
      <span className="button-label">{this.props.name}</span>
    </button>
  }
};
export default Button;
