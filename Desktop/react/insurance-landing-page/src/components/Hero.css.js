import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  height: 100vh;
  position: relative;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    /* background-image: url("https://img.freepik.com/free-photo/happy-family-silhouette-sunset_1303-22466.jpg?w=900&t=st=1699984616~exp=1699985216~hmac=a21baa991cbbfbf829683a1214d145db508654006069758efa259be6d333a0c8"); */
    /* background-image: url("https://img.freepik.com/premium-photo/family-walking-down-path-mountains_662214-18146.jpg?w=740"); */
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
  width: 600px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 30px;
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
  font-size: 50px;
  letter-spacing: 3px;
  .span {
    color: ${({ theme }) => theme.thirdColor};
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.firstColor};
`;

export const StyledButton = styled.button`
  width: 230px;
  background-color: transparent;
  color: ${({ theme }) => theme.firstColor};

  padding: 8px;
  border: 2px solid ${({ theme }) => theme.firstColor};

  font-weight: 600;
  border-radius: 3px;
  position: absolute;
  left: 0;
  bottom: -40px;
  transition: 0.5s ease-in;
  /* align-self: flex-end; */
  &:hover {
    scale: 1.15;
    /* background-color: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.fiveColor}; */
  }
`;
