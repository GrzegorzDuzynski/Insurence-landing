import React from "react";

import "./About.css";
import {
  StyledAboutContainer,
  StyledBox,
  StyledButton,
  StyledImgBox,
  StyledText,
  StyledTitle,
} from "./About.css";

const About = () => {
  return (
    <StyledAboutContainer>
      <StyledImgBox>
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
          alt="Mariusz Sępowicz"
        />
      </StyledImgBox>
      <StyledBox>
        <StyledTitle>
          Jestem <span className="span">Twoim </span>ubezpieczycielem
        </StyledTitle>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          soluta, nemo quia quaerat similique modi ab dolores suscipit labore
          voluptas illo, a numquam. Quia, odit.
        </StyledText>
        <StyledButton>Proszę o kontakt</StyledButton>
      </StyledBox>
    </StyledAboutContainer>
  );
};

export default About;
