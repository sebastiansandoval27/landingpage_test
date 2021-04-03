import styled from "styled-components";

export const SettingsScreenComp = styled.div`
  width: 100vw;
  background-color: var(--blue-dark);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const Form = styled.div`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    margin: 0px 20px;
    padding: 20px;
  }
`;

export const Info = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }
`;
