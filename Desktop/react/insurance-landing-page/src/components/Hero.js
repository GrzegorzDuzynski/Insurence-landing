import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import {
  StyledBox,
  StyledButton,
  StyledHeaderContainer,
  StyledHeaderTitle,
  StyledText,
  StyledBoxAngleText,
  StyledBoxAngleIcon,
  StyledLink,
} from "./Hero.css";

const Hero = () => {
  return (
    <StyledHeaderContainer id="hero">
      <StyledBox>
        <StyledHeaderTitle>
          Ubezpieczenie na <span className="span">życie</span> to się opłaca
        </StyledHeaderTitle>
        <StyledText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, veniam.
        </StyledText>
        <StyledButton>
          <StyledLink smooth to="/#contact">
            <div class="box-button-hero">
              <h1 class="title-button-hero">
                <span class="old-text">Porozmawiajmy o przyszłości</span>
                <span class="new-text">To dobry wybór</span>
              </h1>
            </div>
          </StyledLink>
        </StyledButton>
      </StyledBox>
      <StyledLink smooth to="/#offer">
        <StyledBoxAngleText>
          <StyledText>zobacz więcej</StyledText>
        </StyledBoxAngleText>
        <StyledBoxAngleIcon>
          <StyledText>
            <FontAwesomeIcon icon={faAnglesDown} />
          </StyledText>
        </StyledBoxAngleIcon>
      </StyledLink>
    </StyledHeaderContainer>
  );
};

export default Hero;
