import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { opinions } from "../data";
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
  //   const getOpinions = createAsyncThunk("getOpinions", async () => {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     return response.data;
  //   });

  // console.log(getOpinions);

  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 3,
    adaptiveHeight: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <StyledContainer>
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
