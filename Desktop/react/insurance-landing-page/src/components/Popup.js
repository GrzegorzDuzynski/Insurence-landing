import React from "react";
import { StyledButton, StyledContainer } from "./Popup.css";

const Popup = ({ children, onClick }) => {
  return (
    <StyledContainer>
      <StyledButton onClick={onClick}>x</StyledButton>
      {children}
    </StyledContainer>
  );
};

export default Popup;
