import React from "react";
import MSPhoto_new from "../MSPhoto_new.jpg";
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

// MSPhoto_new

const About = () => {
  return (
    <StyledAboutContainer id="about">
      <StyledImgBox>
        <img src={MSPhoto_new} alt="Mariusz Sępowicz" />
      </StyledImgBox>
      <StyledBox>
        <StyledTitle>
          Jestem <span className="span">Twoim </span>ubezpieczycielem
        </StyledTitle>
        <StyledText style={{ textAlign: "justify" }}>
          Od wielu lat specjalizuję się w branży ubezpieczeń, a&nbsp;największą
          satysfakcję czerpię z budowania trwałych relacji z moimi stałymi
          klientami. Jestem przekonany, że&nbsp;każdy zasługuje na profesjonalne
          doradztwo i&nbsp;świadome podejmowanie decyzji dotyczących
          ubezpieczeń. Zawsze staram się przedstawiać oferty dopasowane
          do&nbsp;indywidualnych potrzeb i możliwości finansowych moich klientów
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
