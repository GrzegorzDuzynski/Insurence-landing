import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { device } from "../breakpoints";

export const StyledHeaderContainer = styled.div`
  height: 100vh;
  position: relative;
  padding: 30px;

  display: flex;
  /* gap: 30px; */
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background-image: url("https://img.freepik.com/free-photo/family-bonding-sunset-tranquil-jetty-generated-by-ai_188544-33114.jpg?t=st=1700383921~exp=1700387521~hmac=2fdd0d2ea3b2d2f66eb21ef1ce5a9a7bd7d7182a273039e6324418d3aedeca15&w=740");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 90%;
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export const StyledBox = styled.div`
  width: 500px;
  position: relative;
  backdrop-filter: blur(20px);
  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${device.tablet} {
    width: 260px;
  }
`;

export const StyledBoxAngleIcon = styled.div`
  cursor: pointer;

  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
`;

export const StyledBoxAngleText = styled.div`
  position: absolute;

  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
`;

export const StyledHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.firstColor};
  font-size: 45px;
  letter-spacing: 3px;
  .span {
    color: ${({ theme }) => theme.thirdColor};
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.firstColor};
  /* text-align: justify; */
  @media ${device.tablet} {
    font-size: 12px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.firstColor};

  padding: 4px;
  border: 2px solid ${({ theme }) => theme.firstColor};
  font-weight: 600;
  border-radius: 3px;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: -50px;
  transition: 0.5s ease-in;
  &:hover {
    scale: 1.15;
  }
  @media ${device.tablet} {
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.firstColor};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.firstColor};
  .box-button-hero {
    transition: all 500ms ease-in-out;
  }
  .title-button-hero {
    overflow: hidden;
    font-size: 20px;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  .old-text,
  .new-text {
    display: block;
    overflow: hidden;
    transition: all 500ms ease-in-out;
  }
  .old-text {
    height: auto;
    opacity: 1;
    width: auto;
  }
  .new-text {
    height: 0;
    opacity: 0;
    width: 0;
  }
  .box-button-hero:hover .old-text {
    height: 0px;
    opacity: 0;
    width: 0px;
  }
  .box-button-hero:hover .new-text {
    height: auto;
    opacity: 1;
    width: auto;
  }
`;

export const StyledBoxLogo = styled.div`
  height: 220px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBoxLogoAndTitle = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;
