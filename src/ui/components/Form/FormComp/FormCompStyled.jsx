import styled from "styled-components";

export const Form = styled.div`
  width: 85%;
  height: auto;
  padding: 10px 15px;
  margin: 0 auto;
  background: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const FormName = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font-family: Poppins;
      font-size: 40px;
      color: var(--white);
      margin: 10px 0px;
    }
  }
  @media screen and (min-width: 768px) {
    .logo-name {
      h3 {
        font-size: 50px;
      }
    }
  }
`;

export const Logo = styled.h2`
  font-size: 18px;
  color: var(--pink);
  font-family: Poppins;
  display: flex;
  align-items: center;

  span {
    font-size: 10px;
    color: var(--grey);
    align-self: flex-end;
    margin-left: 5px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
    span {
      font-size: 14px;
    }
  }
`;

export const AccountQuestion = styled.div`
  width: 100%;
  height: 25px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 200;

  a {
    margin-left: 5px;
    color: var(--pink);
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;
