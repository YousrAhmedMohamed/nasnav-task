import React from 'react';
import './style.scss';
import CustomerService from '../../images/Customer-service.png';
import fashionRetail from '../../images/fashion-retail.png';
import Adidas from '../../images/Adidas_Logo.svg.png';
import DC from '../../images/DC-Logo.png';
import Vans from '../../images/vans-logo.png';
import Levis from '../../images/Levis-Logo-1.png';
import ActivityCard from '../ActivityCard';
import blogPic from '../../images/blog-pic.png';

class ScrollBrands extends React.Component {

  render() {
    return <div className="scroll-body">
      <div className="blog-card-body">
        <span className="show-more-span">
          SHOW MORE
        </span>
        <span className="blog-span">
          Blog
        </span>
        <img src={blogPic} alt="blog" style={{
          width: '383px',
          height: '493px'
        }} />
      </div>
      <ActivityCard
        imageActivity={CustomerService}
        imageBrand={Adidas}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={fashionRetail}
        imageBrand={Vans}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={CustomerService}
        imageBrand={Levis}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={fashionRetail}
        imageBrand={DC}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={CustomerService}
        imageBrand={Adidas}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={fashionRetail}
        imageBrand={Vans}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={CustomerService}
        imageBrand={Levis}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={fashionRetail}
        imageBrand={DC}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={CustomerService}
        imageBrand={Adidas}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />

      <ActivityCard
        imageActivity={fashionRetail}
        imageBrand={Vans}
        activityName="Surfing in Maldives"
        description="It’s windy. The cool breeze of the ocean. It gives,
            a sense of beauty, in motion. All is flowing,
            rushing and tide-And I sit in wonder, dreaming beside."
      />
    </div>
  }
}
export default ScrollBrands;