import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import {
  StyledContainer,
  StyledLinkA,
  StyledList,
  StyledListItem,
  StyledTitle,
} from "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <StyledContainer>
        <StyledTitle>
          Żółty Punkt <FontAwesomeIcon icon={faLocationDot} />
        </StyledTitle>
        <StyledList>
          <StyledListItem>
            <StyledLinkA href="#Hero">Oferta</StyledLinkA>
          </StyledListItem>
          <StyledListItem>
            <StyledLinkA href="#About">O mnie</StyledLinkA>
          </StyledListItem>
          <StyledListItem>
            <StyledLinkA href="#Reputation">Reputacja</StyledLinkA>
          </StyledListItem>
          <StyledListItem>
            <StyledLinkA href="#Stats">Statystyki</StyledLinkA>
          </StyledListItem>
          <StyledListItem>
            <StyledLinkA href="#Contact">Kontakt</StyledLinkA>
          </StyledListItem>
        </StyledList>
      </StyledContainer>
    </nav>
  );
};

export default Navigation;
