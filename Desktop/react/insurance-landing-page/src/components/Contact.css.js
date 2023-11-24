import styled from "styled-components";
import foto from "../zolty_punkt_ubezpieczen.JPG";

export const StyledContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 30px;
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 100px;

  &::before {
    content: "";
    background-image: url(${foto});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 70%;
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export const StyledBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledBoxRight = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const StyledBox = styled.div`
  position: relative;
`;
export const StyledInput = styled.input`
  width: 300px;
  padding: 4px;
`;

export const StyledTextArea = styled.textarea`
  height: 80px;
  width: 300px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.fiveColor};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 2px;
`;

export const StyledBoxImg = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid gray;
`;

export const StyledTextError = styled.p`
  font-size: 12px;
  color: red;
  position: absolute;
  left: 0;
  bottom: -20px;
`;

export const StyledButton = styled.button`
  width: 160px;
  background-color: ${({ theme }) => theme.thirdColor};
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.fiveColor};
  font-weight: 600;
  border-radius: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.fiveColor};
    border: 2px solid ${({ theme }) => theme.firstColor};
  }
`;
