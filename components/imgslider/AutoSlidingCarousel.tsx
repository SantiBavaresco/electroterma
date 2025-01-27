
import React from "react";
import Slider from "react-slick";

function AutoSlidingCarousel() {
  const contentStyle: React.CSSProperties = {
    height: '160px',
    // width:"700px",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
        <div>
          <h3 style={contentStyle}>5</h3>
        </div>
        <div>
          <h3 style={contentStyle}>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoSlidingCarousel;

// import React from 'react';
// import { Carousel } from 'antd';

// const contentStyle: React.CSSProperties = {
//   height: '160px',
//   // width:"700px",
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

// const AutoSlidingCarousel: React.FC = () => (
//   <Carousel autoplay dots={false} speed={10000}  centerMode autoplaySpeed={0}>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
// );

// export default AutoSlidingCarousel;