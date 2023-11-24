import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100vh;
  position: relative;
  padding: 30px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledCard = styled.div`
  width: 300px;
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgb(154, 151, 151);
  background-color: ${({ theme }) => theme.secondColor};
  padding: 15px;
  transition: 0.5s ease-in;

  display: flex;
  flex-direction: column;
  gap: 30px;

  &:hover {
    scale: 1.1;
  }
`;

export const StyledBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const StyledBoxImg = styled.div`
  height: 250px;
  width: 270px;
`;
export const StyledBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.zeroColor};
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
`;

export const StyledText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.zeroColor};
`;

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.zeroColor};
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.thirdColor};
  font-weight: 600;
  border-radius: 3px;
  transition: 0.5s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.thirdColor};
    color: ${({ theme }) => theme.fiveColor};
  }
`;
