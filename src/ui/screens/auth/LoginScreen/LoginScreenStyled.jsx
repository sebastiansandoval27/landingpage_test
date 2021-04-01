import styled from "styled-components";
import bgLogin from "../../../../assets/images/bgLogin.jpg";

export const LoginComp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgLogin});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
