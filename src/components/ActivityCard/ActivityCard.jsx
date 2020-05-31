import React from 'react';
import './style.scss';
import ReadMoreReact from 'read-more-react';


const readMoreText = <span className="see-more">SEE MORE</span>

class ActivityCard extends React.Component {

  render() {
    return <div className="brand-card-body" >
      <div className="container-card">
        <img src={this.props.imageActivity} alt="cart" style={{ width: '100%' }} />
        <div className="container-card" style={{ padding: '15px' }}>
          <img src={this.props.imageBrand} alt="imageBrand" className="brand-style" />
          <span className="activity-span">{this.props.activityName}</span>
          <label
            className="more-span" >
            <ReadMoreReact text={this.props.description}
              min={60}
              ideal={70}
              max={80}
              readMoreText={readMoreText} />
          </label>
        </div>
      </div>
    </div >
  }
}

export default ActivityCard;