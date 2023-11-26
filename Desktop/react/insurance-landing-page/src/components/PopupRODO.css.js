import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 600px;
  padding: 30px;
  overflow: hidden;
  position: absolute;
  /* bottom: 50%; */
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

export const StyledText = styled.p`
  color: ${({ theme }) => theme.zeroColor};
  font-size: 12px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.zeroColor};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1px;
`;
