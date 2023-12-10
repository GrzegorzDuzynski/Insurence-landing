import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { opinions } from "../data";
import axios from "axios";
import "./Reputation.css";
import {
  StyledBigTitle,
  StyledBox,
  StyledBoxOutside,
  StyledContainer,
  StyledText,
  StyledTitle,
} from "./Reputation.css";

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

const Reputation = () => {
  const [opinionsObj, setOpinionsObj] = useState();

  useEffect(() => {
    let config = {
      method: "get",
      url: "/details/json?place_id=ChIJexDWKjAnGEcRl4EbYC5gvRI&key=AIzaSyAHQzVbDSLvoAP4wJgRQpm7y8XXY1KUV9E", //the rest of your url
      secure: false,
    };
    const fetchData = async () => {
      const result = await axios(config).then(function (response) {
        setOpinionsObj(response.data.result.reviews);
        // console.log(response.data.result.reviews);
        // setOpinionsObj(response.data);
      });
    };

    fetchData();
  }, []);

  console.log(opinionsObj);

  let settings = {
    dots: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <StyledContainer id="reputation">
      <StyledBigTitle>Co mówią moi klienci?</StyledBigTitle>
      <Slider {...settings}>
        {opinions.map((opinion, id) => (
          <StyledBoxOutside key={id}>
            <StyledBox>
              <StyledText>{opinion.text}</StyledText>
              <StyledTitle>{opinion.author_name}</StyledTitle>
            </StyledBox>
          </StyledBoxOutside>
        ))}
      </Slider>
    </StyledContainer>
  );
};

export default Reputation;
