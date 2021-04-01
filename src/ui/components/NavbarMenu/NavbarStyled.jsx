import styled from "styled-components";

export const NavMenu = styled.nav`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.menuActive || !props.navColor ? "var(--white)" : "transparent"};
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: ${(props) => (!props.navColor ? "2px 0px 4px" : "")};

  @media screen and (min-width: 768px) {
    padding: 0px 40px;
  }
  @media screen and (min-width: 992px) {
    padding: 0px 15%;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

export const Burguer = styled.i`
  color: ${(props) => (props.navColor ? "var(--white)" : "var(--pink)")};
  font-size: 20px;
  transition: all 0.4s ease;

  &.active {
    color: var(--pink);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.h2`
  font-size: 20px;
  color: ${(props) =>
    props.menuActive || !props.navColor ? "var(--pink)" : "var(--white)"};
  font-family: Poppins;
  display: flex;
  align-items: center;

  span {
    font-size: 10px;
    color: var(--grey);
    align-self: flex-end;
    margin-left: 5px;
  }
`;

export const MenuItemsItem = styled.li`
  width: 100%;
  height: 25px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;
  padding: 10px;

  a {
    font-family: Poppins;

    font-weight: 200;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &::after {
      content: "";
      width: 100%;
      border-top: 2px solid transparent;
      margin-top: 5px;
      transition: all 0.4s ease;
    }

    &:hover {
      border: none;
      text-decoration: none;

      &::after {
        content: "";
        width: 100%;
        border-top: 2px solid var(--pink);
        margin-top: 5px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    background: transparent;
    width: auto;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 5px;

    a {
      flex-direction: column;
      font-size: 12px;

      i.flag {
        color: red;
        font-size: 14px;
      }
      i.down {
        font-size: 14px;
        margin-left: 5px;
      }
      &.sign {
        display: flex;
        flex-direction: column;
      }
      &.sign::after {
        content: "";
        width: 100%;
        border-top: 2px solid var(--pink);
        margin-top: 3px;
      }
    }
  }
`;

export const MenuItems = styled.ul`
  position: absolute;
  top: 50px;
  left: ${(props) => (props.menuActive ? "0" : "-100%")};
  opacity: ${(props) => (props.menuActive ? "1" : "0")};
  transition: all 0.4s ease;
  width: 100%;
  height: 100vh;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${MenuItemsItem} {
    a {
      color: ${(props) =>
        props.navColor ? "var(--white)" : "var(--grey-dark)"};
    }
  }

  @media screen and (min-width: 768px) {
    position: static;
    opacity: 1;
    height: 50px;
    width: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: transparent;
  }
`;

export const Divider = styled.div`
  width: 85%;
  margin: 10px;
  align-self: flex-start;
  height: 1px;
  background: var(--pink);

  @media screen and (min-width: 768px) {
    width: 2px;
    height: 30%;
    background: var(--grey);
    align-self: center;
  }
`;

export const Selected = styled.div`
  width: 15px;
  height: 15px;
  margin: 0px 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
