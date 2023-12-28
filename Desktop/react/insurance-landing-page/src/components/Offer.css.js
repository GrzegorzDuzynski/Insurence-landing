import styled from "styled-components";
import { device } from "../breakpoints";

export const StyledContainer = styled.div`
  min-height: 100vh;
  /* position: relative; */
  padding: 30px;
  align-items: center;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
  grid-auto-rows: auto;
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;
  }
`;

export const StyledCard = styled.div`
  width: 300px;
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgb(154, 151, 151);
  background-color: ${({ theme }) => theme.secondColor};
  padding: 15px;
  transition: 0.5s ease-in;
  justify-self: center;
  /* z-index: 1; */

  display: flex;
  flex-direction: column;
  gap: 20px;

  /* &:hover {
    scale: 1.1;
  } */

  @media ${device.tablet} {
    width: 200px;
    height: 300px;
    padding: 10px;
    gap: 10px;
    /* &:hover {
      scale: 1.05;
    } */
  }
`;

export const StyledBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${device.tablet} {
    gap: 10px;
  }
`;
export const StyledBoxImg = styled.div`
  height: 300px;
  width: 270px;
  @media ${device.tablet} {
    width: 180px;
    height: 180px;
  }
`;

export const StyledBoxText = styled.div``;
export const StyledBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${device.tablet} {
    gap: 6px;
  }
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.zeroColor};
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const StyledText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.zeroColor};
  @media ${device.tablet} {
    font-size: 9px;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.zeroColor};
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.fourColor};
  font-weight: 600;
  border-radius: 3px;
  transition: 0.5s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.fourColor};
    /* color: ${({ theme }) => theme.fiveColor}; */
  }
  @media ${device.tablet} {
    font-size: 10px;
    padding: 6px;
  }
`;
