import React from "react";
import { cooperators } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledBigTitle,
  StyledBox,
  StyledBoxImg,
  StyledBoxOutside,
  StyledContainer,
  StyledTitle,
} from "./Cooperations.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Cooperations = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 5,
    adaptiveHeight: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 3,
        },
      },
    ],
  };
  return (
    <StyledContainer>
      <Slider {...settings}>
        {cooperators.map((cooperator) => (
          <StyledBoxOutside key={cooperator.id}>
            <StyledBox>
              <StyledBoxImg>
                <img
                  style={{ objectFit: "contain" }}
                  src={cooperator.img}
                  alt={cooperator.text}
                />
              </StyledBoxImg>
            </StyledBox>
          </StyledBoxOutside>
        ))}
      </Slider>
    </StyledContainer>
  );
};

export default Cooperations;
