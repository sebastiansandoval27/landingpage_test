import styled from "styled-components";

export const SettingsScreenComp = styled.div`
  width: 100vw;
  background-color: var(--blue-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;
