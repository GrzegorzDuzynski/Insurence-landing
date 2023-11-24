import React from "react";
import {
  StyledBox,
  StyledBoxBlurr,
  StyledButton,
  StyledContainer,
  StyledText,
  StyledTitle,
} from "./Registration.css";

const Registration = () => {
  return (
    <StyledContainer>
      <StyledBoxBlurr>
        <StyledBox>
          <StyledTitle>
            Zarejestruję <span className="span">Twoje</span> auto
          </StyledTitle>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ab.
          </StyledText>
          <StyledButton>Porozmawiajmy</StyledButton>
        </StyledBox>
      </StyledBoxBlurr>
    </StyledContainer>
  );
};

export default Registration;
