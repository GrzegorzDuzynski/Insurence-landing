import React from "react";
import { StyledButton, StyledContainer } from "./Popup.css";

const Popup = ({ children, onClick, backgroundColor }) => {
  return (
    <StyledContainer backgroundColor={backgroundColor}>
      <StyledButton onClick={onClick}>x</StyledButton>
      {children}
    </StyledContainer>
  );
};

export default Popup;
