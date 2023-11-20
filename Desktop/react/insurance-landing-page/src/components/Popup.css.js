import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 600px;
  padding: 30px;
  overflow: hidden;
  position: absolute;
  /* bottom: 50px; */
  left: 50%;
  transform: translate(-50%);
  background-color: white;
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
  background-color: rgb(20, 20, 20);
  border: 1px solid orange;
  border-radius: 4px;
  padding: 6px;
  color: orange;
  &:hover {
    color: white;
    background-color: orange;
  }
`;
