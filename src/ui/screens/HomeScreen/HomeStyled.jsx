import styled from "styled-components";
import back from "../../../assets/images/back1.jpg";

export const ContainerComp = styled.div`
  width: 100vw;
  background: var(--blue-dark);
  background-image: url(${back});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const CenterText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: Milliard;
    font-weight: 200;
    font-size: 26px;
    color: white;
    text-align: center;
    line-height: 30px;
  }

  @media screen and (min-width: 992px) {
    h2 {
      font-size: 35px;
      line-height: 50px;
    }
  }
`;
