import styled from "styled-components";
import { device } from "../breakpoints";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.fiveColor};
`;

export const StyledBoxOutside = styled.div`
  padding: 30px;
  transition: 0.3s ease-in;
  & :hover {
    scale: 1.1;
  }
  @media ${device.tablet} {
    padding: 15px;
    & :hover {
      scale: 1.05;
    }
  }
`;

export const StyledBox = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
`;

export const StyledBigTitle = styled.h1`
  color: ${({ theme }) => theme.thirdColor};
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 3px;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.thirdColor};
  font-size: 20px;
  font-weight: 400;
  text-align: right;
  pointer-events: none;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.thirdColor};
  pointer-events: none;
  @media ${device.tablet} {
    font-size: 10px;
  }
`;
