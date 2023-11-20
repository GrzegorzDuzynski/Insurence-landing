import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  height: 100vh;
  position: relative;
  padding: 30px;
  background-color: ${({ theme }) => theme.secondColor};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledImgBox = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 5px 5px 10px 10px rgb(183, 178, 178);
`;

export const StyledBox = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.firstColor};
  font-size: 50px;
  letter-spacing: 3px;
  font-weight: 400;
  .span {
    color: ${({ theme }) => theme.thirdColor};
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.firstColor};
`;

export const StyledButton = styled.button`
  width: 160px;
  background-color: ${({ theme }) => theme.thirdColor};
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.thirdColor};
  color: ${({ theme }) => theme.fiveColor};
  font-weight: 600;
  border-radius: 3px;

  align-self: flex-end;
  &:hover {
    background-color: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.fiveColor};
    border: 2px solid ${({ theme }) => theme.firstColor};
  }
`;
