import React from "react";

import "./Stats.css";
import {
  StyledBox,
  StyledContainer,
  StyledText,
  StyledTitle,
} from "./Stats.css";

const Stats = () => {
  return (
    <StyledContainer id="stats">
      <StyledBox>
        <StyledTitle>10</StyledTitle>
        <StyledText>Lat na rynku</StyledText>
      </StyledBox>
      <StyledBox>
        <StyledTitle>34500+</StyledTitle>
        <StyledText>Zawartych polis</StyledText>
      </StyledBox>
      <StyledBox>
        <StyledTitle>345+</StyledTitle>
        <StyledText>Zadowolonych klientów</StyledText>
      </StyledBox>
    </StyledContainer>
  );
};

export default Stats;
