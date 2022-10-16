import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import { SlArrowRight } from "react-icons/sl";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <SlArrowRight
      onClick={onClick}
      className={className}
      style={{ ...style, display: "block", color: "#fff", height: " 2rem" }}
    />
  );
}

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        {this.props.futureData.map((element) => (
          <div className="slideElement">
            <p>
              {element.temp}
              <sup>o</sup>
              {this.props.isCelcious ? "C" : "F"}
            </p>
            <img src={element.weather_icon} />
            <p>{element.weekday.split("").splice(0, 3)}</p>
          </div>
        ))}
      </Slider>
    );
  }
}
