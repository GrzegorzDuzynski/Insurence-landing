import React from "react";
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
  // const header = new Headers({ "Access-Control-Allow-Origin": "*" });
  // const getOpinions = fetch(
  //   "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJexDWKjAnGEcRl4EbYC5gvRI&key=AIzaSyAHQzVbDSLvoAP4wJgRQpm7y8XXY1KUV9E",
  //     headers:{
  //     'Access-Control-Allow-Origin': '*', // Ten nagłówek może być ignorowany przez niektóre usługi
  //   },

  // )
  //   .then((response) => response.json())
  //   .then((json) => console.log(json))
  //   .catch((error) => console.log("Authorization failed: " + error.message));

  const fetchData = async () => {
    const apiKey = "AIzaSyAHQzVbDSLvoAP4wJgRQpm7y8XXY1KUV9E";
    const placeId = "ChIJexDWKjAnGEcRl4EbYC5gvRI";

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json`,
        {
          params: {
            place_id: placeId,
            key: apiKey,
          },
          headers: {
            "Access-Control-Allow-Origin": "*", // Ten nagłówek może być ignorowany przez niektóre usługi
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
    }
  };

  fetchData();

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
              <StyledTitle>{opinion.title}</StyledTitle>
            </StyledBox>
          </StyledBoxOutside>
        ))}
      </Slider>
    </StyledContainer>
  );
};

export default Reputation;
