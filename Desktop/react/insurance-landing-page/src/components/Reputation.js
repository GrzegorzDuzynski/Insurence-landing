import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GLogo from "./../icon-google.png";
import axios from "axios";
import "./Reputation.css";
import { loadGoogleMapsPlacesAPI } from "../utils";
import {
  StyledBigTitle,
  StyledBox,
  StyledBoxOutside,
  StyledContainer,
  StyledText,
  StyledTitle,
  StyledBoxImg,
  StyledBoxDiv,
  StyledButton,
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
  const [expandedOpinions, setExpandedOpinions] = useState({});
  const [showFullText, setShowFullText] = useState({});

  const toggleExpanded = (id) => {
    setExpandedOpinions({
      ...expandedOpinions,
      [id]: !expandedOpinions[id],
    });
    setShowFullText({
      ...showFullText,
      [id]: !showFullText[id],
    });
  };

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        // Załaduj API Google Places
        const google = await loadGoogleMapsPlacesAPI();
        const service = new google.maps.places.PlacesService(
          document.createElement("div")
        );

        // Wykonaj zapytanie o opinie dla określonego miejsca
        service.getDetails(
          {
            placeId: "ChIJexDWKjAnGEcRl4EbYC5gvRI",
          },
          (placeResult, status) => {
            if (
              status === google.maps.places.PlacesServiceStatus.OK &&
              placeResult.reviews
            ) {
              setOpinionsObj(placeResult.reviews);
            } else {
              console.error("Wystąpił błąd podczas pobierania opinii.");
            }
          }
        );
      } catch (error) {
        console.error(
          "Wystąpił błąd podczas ładowania API Google Places:",
          error
        );
      }
    };

    fetchOpinions();
  }, []);

  let settings = {
    dots: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 3,
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
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
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
      {opinionsObj && (
        <Slider {...settings}>
          {opinionsObj.map((opinion, id) => (
            <StyledBoxOutside key={id}>
              <StyledBox
                style={{
                  height: expandedOpinions[id] ? "auto" : "230px",
                }}
              >
                <StyledBoxDiv>
                  <StyledBoxImg>
                    <img
                      src={opinion.profile_photo_url}
                      alt={opinion.author_name}
                      referrerPolicy="no-referrer"
                    />
                  </StyledBoxImg>
                  <StyledTitle>{opinion.author_name}</StyledTitle>
                </StyledBoxDiv>
                <StyledText
                  showfulltext={showFullText[id] ? showFullText[id] : ""}
                  expanded={expandedOpinions[id] ? expandedOpinions[id] : ""}
                >
                  {opinion.text}
                </StyledText>
                <StyledButton onClick={() => toggleExpanded(id)}>
                  {showFullText[id] ? "Zwiń" : "Rozwiń"}
                </StyledButton>
              </StyledBox>
            </StyledBoxOutside>
          ))}
          <StyledBoxOutside>
            <StyledBox
              style={{
                height: "230px",
              }}
            >
              <StyledBoxDiv>
                <StyledBoxImg>
                  <img src={GLogo} />
                </StyledBoxImg>
              </StyledBoxDiv>
              <StyledText>
                Więcej opinii dostepnych po wejściu na stronę Google
              </StyledText>
              <StyledButton
                onClick={() =>
                  window.open(
                    "https://www.google.com/search?client=opera&q=opnie+google+żółty+punkt&sourceid=opera&ie=UTF-8&oe=UTF-8#",
                    "_blank"
                  )
                }
              >
                Sprawdź
              </StyledButton>
            </StyledBox>
          </StyledBoxOutside>
        </Slider>
      )}
    </StyledContainer>
  );
};

export default Reputation;
