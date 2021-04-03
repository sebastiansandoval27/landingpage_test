import styled from "styled-components";
import back from "../../../assets/images/profile.jpg";

export const SettingsScreenComp = styled.div`
  width: 100vw;
  background-image: url(${back});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;
