import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { device } from "../breakpoints";

export const StyledContainer = styled.div`
  padding: 10px 50px;
  border-bottom: 1px solid ${({ theme }) => theme.secondColor};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    padding: 10px 20px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  @media ${device.tablet} {
    padding: 10px;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    bottom: -130px;
    right: 0;
    z-index: 10;
  }
`;

export const StyledBoxCompany = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledBoxLogo = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledListItem = styled.li`
  color: gray;
  transition: 0.5s ease-in;
  position: relative;
  z-index: 1;

  /* border-bottom: 2px solid orange; */
  &::after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -5px;
    background-color: ${({ theme }) => theme.fiveColor};
    transition: 0.3s ease-in;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.fiveColor};
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.firstColor};
  @media ${device.tablet} {
    font-size: 24px;
  }
`;
export const StyledText = styled.p``;
