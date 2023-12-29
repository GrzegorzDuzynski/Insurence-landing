import React, { useState } from "react";
import {
  StyledBoxBottom,
  StyledBoxImg,
  StyledBoxImgPopup,
  StyledBoxPopup,
  StyledBoxText,
  StyledBoxTextPopup,
  StyledBoxTop,
  StyledButton,
  StyledCard,
  StyledContainer,
  StyledText,
  StyledTitle,
} from "./Offer.css";
import Popup from "./Popup";
import { insuranceDescription } from ".././data";
import parse from "html-react-parser";

const Offer = () => {
  const [showPopup, setShowPopup] = useState([]);
  console.log(showPopup);
  return (
    <StyledContainer id="offer">
      {insuranceDescription.map((card, id) => (
        <StyledCard key={id}>
          {showPopup[id] && (
            <Popup
              onClick={() =>
                setShowPopup((prevState) => [
                  ...prevState.slice(0, id),
                  false,
                  ...prevState.slice(id + 1),
                ])
              }
            >
              <StyledBoxPopup>
                <StyledBoxImgPopup>
                  <img src={card.img} alt={card.title} />
                </StyledBoxImgPopup>
                <StyledBoxTextPopup>
                  <StyledTitle>{card.title}</StyledTitle>
                  {parse(card.longText)}
                </StyledBoxTextPopup>
              </StyledBoxPopup>
            </Popup>
          )}
          <StyledBoxTop>
            <StyledBoxImg>
              <img src={card.img} alt={card.title} />
            </StyledBoxImg>
          </StyledBoxTop>
          <StyledBoxBottom>
            <StyledTitle>{card.title}</StyledTitle>
            <StyledBoxText>
              <StyledText>{card.shortText}</StyledText>
            </StyledBoxText>
            <StyledButton
              onClick={() =>
                setShowPopup((prevState) => [
                  ...prevState.slice(0, id),
                  true,
                  ...prevState.slice(id + 1),
                ])
              }
            >
              Więcej informacji
            </StyledButton>
          </StyledBoxBottom>
        </StyledCard>
      ))}

      {/* <StyledCard>
        <StyledBoxTop>
          <StyledBoxImg>
            <img
              src="https://img.freepik.com/free-photo/brand-new-car-ai-generated-image_268835-5688.jpg?t=st=1700403130~exp=1700406730~hmac=8355ed0c6f6d65ae77cd914d5c745e3034c011ba5e12de811f9d2982e5411ceb&w=996"
              alt="cars"
            />
          </StyledBoxImg>
        </StyledBoxTop>
        <StyledBoxBottom>
          <StyledTitle>Ubezpieczenie OC/AC</StyledTitle>
          <StyledText>
            OC komunikacyjne - jest w Polsce ubezpieczeniem obowiązkowym.
          </StyledText>
          <StyledButton onClick={() => setShowPopup(true)}>
            Więcej informacji
          </StyledButton>
        </StyledBoxBottom>
      </StyledCard>
      <StyledCard>
        <StyledBoxTop>
          <StyledBoxImg>
            <img
              src="https://img.freepik.com/free-photo/architecture-small-residential-cottage-surrounded-by-nature-generative-ai_188544-7711.jpg?t=st=1700405798~exp=1700409398~hmac=6e0bc4692a916de21555862462dffc5659685b66beec38e2fd8efd07f4aa9bc7&w=996"
              alt="house"
            />
          </StyledBoxImg>
        </StyledBoxTop>
        <StyledBoxBottom>
          <StyledTitle>Ubezpieczenie Nieruchmości</StyledTitle>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
            minus.
          </StyledText>
          <StyledButton onClick={() => setShowPopup(true)}>
            Więcej informacji
          </StyledButton>
        </StyledBoxBottom>
      </StyledCard>
      <StyledCard>
        <StyledBoxTop>
          <StyledBoxImg>
            <img
              src="https://img.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_181624-2203.jpg?w=1380&t=st=1700817095~exp=1700817695~hmac=7d2989c8bd4e919fd57952322143675121306c469650cb7a102cc020d3454527"
              alt="florence"
            />
          </StyledBoxImg>
        </StyledBoxTop>
        <StyledBoxBottom>
          <StyledTitle>Ubezpieczenie na Wyjazd</StyledTitle>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
            minus.
          </StyledText>
          <StyledButton onClick={() => setShowPopup(true)}>
            Więcej informacji
          </StyledButton>
        </StyledBoxBottom>
      </StyledCard>
      <StyledCard>
        <StyledBoxTop>
          <StyledBoxImg>
            <img
              src="https://img.freepik.com/free-photo/woman-holding-girl-medium-shot_23-2148973678.jpg?w=740&t=st=1700817287~exp=1700817887~hmac=3640b6265f8cc223309cfc6e5e4710787c44489097da74bb0a01de9fa29df55e"
              alt="child with women"
            />
          </StyledBoxImg>
        </StyledBoxTop>
        <StyledBoxBottom>
          <StyledTitle>Ubezpieczenie dla Dziecka</StyledTitle>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
            minus.
          </StyledText>
          <StyledButton onClick={() => setShowPopup(true)}>
            Więcej informacji
          </StyledButton>
        </StyledBoxBottom>
      </StyledCard>
      <StyledCard>
        <StyledBoxTop>
          <StyledBoxImg>
            <img
              src="https://img.freepik.com/free-photo/woman-holding-girl-medium-shot_23-2148973678.jpg?w=740&t=st=1700817287~exp=1700817887~hmac=3640b6265f8cc223309cfc6e5e4710787c44489097da74bb0a01de9fa29df55e"
              alt="child with women"
            />
          </StyledBoxImg>
        </StyledBoxTop>
        <StyledBoxBottom>
          <StyledTitle>Inne Ubezpieczenia</StyledTitle>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
            minus.
          </StyledText>
          <StyledButton onClick={() => setShowPopup(true)}>
            Więcej informacji
          </StyledButton>
        </StyledBoxBottom>
      </StyledCard> */}
    </StyledContainer>
  );
};

export default Offer;
