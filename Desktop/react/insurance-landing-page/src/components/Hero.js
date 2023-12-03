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
            Porozmawiajmy o przyszłości
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
