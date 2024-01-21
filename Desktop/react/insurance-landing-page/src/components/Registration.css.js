import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { device } from "../breakpoints";

export const StyledContainer = styled.div`
  height: 100vh;
  position: relative;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  &::before {
    content: "";
    background-image: url("https://img.freepik.com/free-photo/transport-concept-parked-vehicles_23-2148959697.jpg?w=1380&t=st=1700819386~exp=1700819986~hmac=0b004e19bb8aabe19e3bfcd68abdab27f7c0d5890f141cd61a108a88baa3f6f5");
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

export const StyledBoxBlurr = styled.div`
  width: 100%;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledBox = styled.div`
  width: 700px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  @media ${device.tablet} {
    width: 300px;
    gap: 10px;
  }
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.firstColor};
  font-size: 50px;
  letter-spacing: 3px;
  .span {
    color: ${({ theme }) => theme.thirdColor};
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const StyledText = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.fiveColor};
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  width: 180px;
  background-color: transparent;
  color: ${({ theme }) => theme.firstColor};

  padding: 8px;
  border: 2px solid ${({ theme }) => theme.firstColor};

  font-weight: 600;
  border-radius: 3px;
  transition: 0.5s ease-in;
  &:hover {
    scale: 1.15;
  }
  @media ${device.tablet} {
    padding: 6px;
    border: 1px solid ${({ theme }) => theme.firstColor};
    font-weight: 400;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.firstColor};
`;
