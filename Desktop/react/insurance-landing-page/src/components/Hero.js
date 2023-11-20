import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";
import {
  StyledBox,
  StyledButton,
  StyledHeaderContainer,
  StyledHeaderTitle,
  StyledText,
  StyledBoxAngleText,
  StyledBoxAngleIcon,
} from "./Hero.css";

const Hero = () => {
  return (
    <StyledHeaderContainer>
      <StyledBox>
        <StyledHeaderTitle>
          Ubezpieczenie na <span className="span">życie</span> to się opłaca
        </StyledHeaderTitle>
        <StyledText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, veniam.
        </StyledText>
        <StyledButton>Porozmawiajmy o przyszłości</StyledButton>
      </StyledBox>
      <StyledBoxAngleText>
        <StyledText>zobacz więcej</StyledText>
      </StyledBoxAngleText>
      <StyledBoxAngleIcon>
        <StyledText>
          <FontAwesomeIcon icon={faAnglesDown} />
        </StyledText>
      </StyledBoxAngleIcon>
    </StyledHeaderContainer>
  );
};

export default Hero;
