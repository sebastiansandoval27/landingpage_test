import styled from "styled-components";

export const FooterComp = styled.footer`
  width: 100%;
  height: auto;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    align-items: flex-start;
  }
`;

export const ContactNav = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    background-color: white;
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
  }
`;

export const ContactNavItem = styled.div`
  width: 85%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
  margin: 15px 0px;

  &:last-of-type {
    height: 300px;
  }

  h2 {
    font-size: 18px;
    color: var(--grey-dark);
    font-family: Milliard;
    font-weight: 700;
  }

  ul {
    margin-top: 10px;
    width: 85%;

    li {
      margin: 10px 0px;
      font-weight: 500;
      color: Var(--grey);
    }
  }

  @media screen and (min-width: 480px) {
    width: 65%;
    height: 200px;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
    &:last-of-type {
      width: 300px;
    }
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export const ContactInfo = styled.ul`
  margin-top: 10px;
  width: 85%;

  li {
    margin: 0px;
    font-weight: 500;
    color: Var(--grey);

    &:last-of-type {
      margin-top: 30px;
    }
  }
`;

export const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 25px;

  i {
    margin: 0px 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #485468;
    color: var(--white);
    font-size: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoFooter = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 auto;

  hr {
    width: 100%;
    border-top: 1px solid var(--grey);
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-family: Milliard;
      font-weight: 700;
      color: var(--grey-dark);
    }
    span {
      font-family: Milliard;
      font-weight: 200;
      color: var(--grey);
      font-size: 12px;
    }
  }

  @media screen and (min-width: 480px) {
    width: 85%;
  }
  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
  }
`;
