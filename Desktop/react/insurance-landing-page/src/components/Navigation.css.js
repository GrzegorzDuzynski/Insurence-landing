import styled from "styled-components";

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
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
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

export const StyledLinkA = styled.a`
  color: ${({ theme }) => theme.fiveColor};
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.firstColor};
`;
export const StyledText = styled.p``;
