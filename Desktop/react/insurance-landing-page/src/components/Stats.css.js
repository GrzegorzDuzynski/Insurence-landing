import styled from "styled-components";
import { device } from "../breakpoints";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.secondColor};
  display: flex;
  justify-content: space-evenly;
  @media ${device.tablet} {
    padding: 10px;
  }
`;
export const StyledBoxPlus = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.secondColor};
  display: flex;
  justify-content: space-evenly;
  @media ${device.tablet} {
    /* flex-direction: column; */
    /* justify-content: center;
    align-items: center; */
  }
`;

export const StyledBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media ${device.tablet} {
    padding: 5px;
    gap: 5px;
  }
`;

export const StyledBigTitle = styled.h1`
  color: ${({ theme }) => theme.firstColor};
  font-size: 40px;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.firstColor};
  text-shadow: 1px 1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(180, 180, 180),
    -1px -1px 0 rgb(180, 180, 180), 1px -1px 0 rgb(180, 180, 180);
  font-size: 36px;
  font-weight: 400;
  text-align: right;
  @media ${device.tablet} {
    font-size: 20px;
    text-align: center;
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.firstColor};
  text-shadow: 1px 1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(180, 180, 180),
    -1px -1px 0 rgb(180, 180, 180), 1px -1px 0 rgb(180, 180, 180);
  @media ${device.tablet} {
    font-size: 10px;
    text-align: center;
  }
`;
