import React, { useState } from "react";
import {
  StyledBoxBottom,
  StyledBoxImg,
  StyledBoxTop,
  StyledButton,
  StyledCard,
  StyledContainer,
  StyledText,
  StyledTitle,
} from "./Offer.css";
import Popup from "./Popup";

const Offer = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <StyledContainer>
      {showPopup && (
        <Popup onClick={() => setShowPopup(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          enim dolorum in cum aliquid et at adipisci, quam earum ullam explicabo
          quisquam quasi, cupiditate nostrum ratione iure corporis repudiandae
          quibusdam nesciunt debitis, obcaecati animi porro? Repudiandae sequi
          aliquid iste omnis?
        </Popup>
      )}
      <StyledCard>
        <StyledBoxTop>
          <StyledBoxImg>
            <img
              src="https://img.freepik.com/free-photo/happy-beautiful-family-big-garden-dawn-time_1328-1069.jpg?w=1060&t=st=1700405293~exp=1700405893~hmac=c8e03649f22108cd5744dc8c984562d08072d07f2683bd056a66c28a69fc05ab"
              alt="family"
            />
          </StyledBoxImg>
        </StyledBoxTop>
        <StyledBoxBottom>
          <StyledTitle>Ubezpieczenia na Życie</StyledTitle>
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
              src="https://img.freepik.com/free-photo/brand-new-car-ai-generated-image_268835-5688.jpg?t=st=1700403130~exp=1700406730~hmac=8355ed0c6f6d65ae77cd914d5c745e3034c011ba5e12de811f9d2982e5411ceb&w=996"
              alt="cars"
            />
          </StyledBoxImg>
        </StyledBoxTop>
        <StyledBoxBottom>
          <StyledTitle>Ubezpieczenie OC/AC</StyledTitle>
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
    </StyledContainer>
  );
};

export default Offer;
