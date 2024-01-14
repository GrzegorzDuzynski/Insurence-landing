import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { device } from "../breakpoints";

export const StyledAboutContainer = styled.div`
  height: 100vh;
  position: relative;
  padding: 30px;
  background-color: ${({ theme }) => theme.secondColor};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const StyledImgBox = styled.div`
  width: 500px;
  /* height: 500px; */
  box-shadow: 5px 5px 10px 10px rgb(183, 178, 178);
  @media ${device.tablet} {
    width: 280px;
    height: 230px;
  }
`;

export const StyledBox = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${device.tablet} {
    gap: 10px;
    width: 280px;
  }
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.firstColor};
  font-size: 50px;
  letter-spacing: 3px;
  text-shadow: 1px 1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(180, 180, 180),
    -1px -1px 0 rgb(180, 180, 180), 1px -1px 0 rgb(180, 180, 180);
  font-weight: 400;
  .span {
    color: ${({ theme }) => theme.thirdColor};
  }
  @media ${device.tablet} {
    font-size: 24px;
    letter-spacing: 1px;
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.zeroColor};
  @media ${device.tablet} {
    font-size: 10px;
  }
`;

export const StyledButton = styled.button`
  width: 160px;
  background-color: transparent;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.firstColor};
  color: ${({ theme }) => theme.zeroColor};
  font-weight: 600;
  border-radius: 3px;
  transition: 0.5s ease-in;
  box-shadow: 1px 1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(180, 180, 180),
    -1px -1px 0 rgb(180, 180, 180), 1px -1px 0 rgb(180, 180, 180);

  align-self: flex-end;
  &:hover {
    background-color: ${({ theme }) => theme.firstColor};
  }
  @media ${device.tablet} {
    padding: 6px;
    font-weight: 400;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.zeroColor};

  @media ${device.tablet} {
    font-size: 12px;
    font-weight: 400;
  }
`;
