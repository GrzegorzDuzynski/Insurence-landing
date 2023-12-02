import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import logo from "../LOGO2.png";

import {
  StyledBoxCompany,
  StyledBoxLogo,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledTitle,
} from "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <StyledContainer>
        <StyledBoxCompany>
          <StyledBoxLogo>
            <img src={logo} alt="Żółty Punkt" />
          </StyledBoxLogo>
          <StyledTitle>Żółty Punkt</StyledTitle>
        </StyledBoxCompany>
        <StyledList>
          <StyledListItem>
            <StyledLink smooth to="/#offer">
              Oferta
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink smooth to="/#about">
              O mnie
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink smooth to="/#reputation">
              Reputacja
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink smooth to="/#stats">
              Statystyki
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink smooth to="/#contact">
              Kontakt
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledContainer>
    </nav>
  );
};

export default Navigation;
