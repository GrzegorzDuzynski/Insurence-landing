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
            Jeżeli zależy Ci na oszczędzeniu czasu, z przyjemnością dokonam
            rejestracji Twojego pojazdu.
          </StyledText>
          <StyledButton>
            <StyledLink smooth to="/#contact">
              Napisz do mnie
            </StyledLink>
          </StyledButton>
        </StyledBox>
      </StyledBoxBlurr>
    </StyledContainer>
  );
};

export default Registration;
