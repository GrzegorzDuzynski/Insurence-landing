import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  background-color: #292727;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMainContainer = styled.div`
  background-color: #f3eeee;
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const StyledBoxInputs = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledBoxFoto = styled.div`
  height: 400px;
  width: 600px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: ${({ theme }) => theme.secondary};
`;

export const StyledText = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
`;

export const StyledInputSelect = styled.select`
  text-align: center;
  font-size: 20px;
  padding: 4px;
  color: gray;
  border-radius: 5px;
  option {
    color: black;
    background: rgb(238, 235, 235);
    text-align: left;
  }
`;

export const StyledButton = styled.button`
  height: 100px;
  width: 100px;
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 50%;
  font-size: 20px;
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const StyledBoxBottom = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 22px;
`;
