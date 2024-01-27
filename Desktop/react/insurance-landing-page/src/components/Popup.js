import React from "react";
import { StyledButton, StyledContainer } from "./Popup.css";

const Popup = ({ children, onClick, onClickBack, backgroundColor }) => {
  return (
    <StyledContainer backgroundColor={backgroundColor}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StyledButton style={{ width: 60 }} onClick={onClickBack}>
          Powrót
        </StyledButton>
        <StyledButton onClick={onClick}>x</StyledButton>
      </div>
      {children}
    </StyledContainer>
  );
};

export default Popup;
