import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../LOGO3.png";
import {
  StyledBox,
  StyledButton,
  StyledHeaderContainer,
  StyledHeaderTitle,
  StyledText,
  StyledBoxAngleText,
  StyledBoxAngleIcon,
  StyledLink,
  StyledBoxLogo,
  StyledBoxLogoAndTitle,
} from "./Hero.css";

const Hero = () => {
  return (
    <StyledHeaderContainer id="hero">
      <StyledBoxLogoAndTitle>
        <StyledBoxLogo>
          <img src={logo} alt="Żółty Punkt" />
        </StyledBoxLogo>
        <StyledBox>
          <StyledHeaderTitle>
            Ubezpieczenie na <span className="span">życie</span> to się opłaca
          </StyledHeaderTitle>
          <StyledText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            veniam.
          </StyledText>
          <StyledButton>
            <StyledLink smooth to="/#contact">
              <div className="box-button-hero">
                <h1 className="title-button-hero">
                  <span className="old-text">Porozmawiajmy o przyszłości</span>
                  <span className="new-text">To dobry wybór</span>
                </h1>
              </div>
            </StyledLink>
          </StyledButton>
        </StyledBox>
      </StyledBoxLogoAndTitle>
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
