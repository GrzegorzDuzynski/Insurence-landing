import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  background-color: ${(props) => props.backgroundColor || "white"};
  box-shadow: 3px 3px 7px 7px gray;
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledButton = styled.button`
  height: 30px;
  width: 30px;
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid orange;
  border-radius: 4px;
  padding: 6px;
  color: orange;
  &:hover {
    color: white;
    background-color: orange;
  }
`;
