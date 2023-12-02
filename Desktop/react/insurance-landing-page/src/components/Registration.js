import React from "react";
import {
  StyledBox,
  StyledBoxBlurr,
  StyledButton,
  StyledContainer,
  StyledLink,
  StyledText,
  StyledTitle,
} from "./Registration.css";

const Registration = () => {
  return (
    <StyledContainer id="registration">
      <StyledBoxBlurr>
        <StyledBox>
          <StyledTitle>
            Zarejestruję <span className="span">Twoje</span> auto
          </StyledTitle>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ab.
          </StyledText>
          <StyledButton>
            <StyledLink smooth to="/#contact">
              Porozmawiajmy
            </StyledLink>
          </StyledButton>
        </StyledBox>
      </StyledBoxBlurr>
    </StyledContainer>
  );
};

export default Registration;
