import React from "react";
import doGpryNogami from "../doGoryNogami.png";

import "./About.css";
import {
  StyledAboutContainer,
  StyledBox,
  StyledButton,
  StyledImgBox,
  StyledLink,
  StyledText,
  StyledTitle,
} from "./About.css";

const About = () => {
  return (
    <StyledAboutContainer id="about">
      <StyledImgBox>
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
          alt="Mariusz Sępowicz"
        />
        {/* <img src={doGpryNogami} alt="Żółty Punkt" /> */}
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
        <StyledButton>
          <StyledLink smooth to="/#contact">
            Proszę o kontakt
          </StyledLink>
        </StyledButton>
      </StyledBox>
    </StyledAboutContainer>
  );
};

export default About;
