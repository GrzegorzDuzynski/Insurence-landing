import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.secondColor};
  display: flex;
  justify-content: space-evenly;
`;

export const StyledBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledBigTitle = styled.h1`
  color: ${({ theme }) => theme.thirdColor};
  font-size: 40px;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.thirdColor};
  font-size: 36px;
  font-weight: 400;
  text-align: right;
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.thirdColor};
`;
