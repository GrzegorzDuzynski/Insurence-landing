import styled from "styled-components";

import { device } from "../breakpoints";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.fiveColor};
`;

export const StyledBoxOutside = styled.div`
  padding: 30px;
  @media ${device.tablet} {
    padding: 15px;
  }
`;

export const StyledBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: height 0.3s;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledBoxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledBoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 2px solid #ddd;
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledBigTitle = styled.h1`
  color: ${({ theme }) => theme.thirdColor};
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 1px;
  @media ${device.tablet} {
    font-size: 24px;
    letter-spacing: 0.5px;
  }
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.thirdColor};
  font-size: 20px;
  font-weight: 400;
  text-align: right;
  pointer-events: none;
  margin-bottom: 10px;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const StyledText = styled.p.attrs((props) => ({
  showfulltext: props.showfulltext ? "true" : "false",
  expanded: props.expanded ? "true" : "false",
}))`
  color: ${({ theme }) => theme.zeroColor};
  pointer-events: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ showFullText }) => (showFullText ? "normal" : "pre-wrap")};
  height: ${({ expanded, showFullText }) =>
    expanded || showFullText ? "auto" : "60px"};
  transition: height 0.3s;

  @media ${device.tablet} {
    font-size: 14px;
    height: ${({ expanded, showFullText }) =>
      expanded || showFullText ? "auto" : "50px"};
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
