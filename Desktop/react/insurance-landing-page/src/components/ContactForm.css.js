import styled from "styled-components";
import foto from "../zolty_punkt_ubezpieczen.JPG";
import { device } from "../breakpoints";

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
    filter: blur(1px);

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  @media ${device.laptop} {
    gap: 20px;
  }
  @media ${device.tablet} {
    height: auto;
    flex-direction: column-reverse;
  }
`;

export const StyledBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: 30px;
  @media ${device.tablet} {
    gap: 15px;
  }
`;

export const StyledBoxMiddle = styled.div``;

export const StyledBoxRight = styled.div`
  width: 100%;
  height: 300px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${device.tablet} {
    height: 150px;
  }
`;
export const StyledBoxBlurr = styled.div`
  width: 350px;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    width: 260px;
  }
`;
export const StyledBox = styled.div`
  position: relative;
`;

export const StyledBoxContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export const StyledInput = styled.input`
  height: 32px;
  width: 100%;
  padding: 4px;
  @media ${device.tablet} {
    padding: 2px;
    width: 100%;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 2px;
`;

export const StyledTitle = styled.h1`
  color: ${(props) => props.ColorTitlePopup || ((theme) => theme.fiveColor)};
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  letter-spacing: 3px;
  .span {
    color: ${({ theme }) => theme.firstColor};
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const StyledBoxImg = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid gray;
  @media ${device.tablet} {
    width: 260px;
    height: 260px;
  }
`;

export const StyledTextError = styled.p`
  font-size: 12px;
  color: ${(props) => props.ColorErrorPopup || "rgb(212, 249, 65)"};
  position: absolute;
  left: 0;
  bottom: -20px;
  @media ${device.tablet} {
    bottom: -10px;
    font-size: 8px;
  }
`;
export const StyledBoxCheckbox = styled.div`
  width: 300px;
  display: flex;
  gap: 20px;
  @media ${device.tablet} {
    width: 260px;
    gap: 10px;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 18px;
  width: 18px;
  background-color: rgb(248, 242, 242);
  border: 1px solid rgb(214, 208, 208);
`;
export const StyledText = styled.p`
  font-size: 12px;
  color: ${(props) => props.ColorTextPopup || "white"};
  @media ${device.tablet} {
    font-size: 10px;
  }
`;
export const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.firstColor};
  color: ${(props) => props.ColorTextPopup || ((theme) => theme.fiveColor)};
  font-weight: 600;
  border-radius: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.zeroColor};
  }
  @media ${device.tablet} {
    font-size: 12px;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.firstColor};
    font-size: 400;
  }
`;
export const StyledButtonRODO = styled.button`
  width: 100%;
  background-color: transparent;
  /* padding: 8px; */
  border: 2px solid transparent;
  color: ${(props) => props.ColorTextPopup || ((theme) => theme.fiveColor)};
  &:hover {
    color: ${({ theme }) => theme.firstColor};
  }
`;
