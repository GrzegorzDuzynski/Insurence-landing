import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.fiveColor};
`;

export const StyledBoxOutside = styled.div`
  padding: 30px;
  transition: 0.3s ease-in;
  /* & :hover {
    scale: 1.1;
  } */
`;

export const StyledBox = styled.div`
  padding: 20px;
`;

export const StyledBigTitle = styled.h1`
  color: ${({ theme }) => theme.thirdColor};
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 3px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.thirdColor};
  font-size: 20px;
  font-weight: 400;
  text-align: right;
  pointer-events: none;
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.thirdColor};
  pointer-events: none;
`;

export const StyledBoxImg = styled.div`
  height: 100px;
  width: 100px;
  pointer-events: none;
`;
