import React, { useState, useEffect } from "react";
import {
  NavMenu,
  Menu,
  MenuItems,
  MenuItemsItem,
  Divider,
  Selected,
  Logo,
  Burguer,
} from "./NavbarStyled";
import { NavLink } from "react-router-dom";
import flag from "../../../assets/images/flag.png";

const NavbarMenu = () => {
  const [menuActive, setActive] = useState(false);
  const [navColor, setNavColor] = useState(true);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 50) {
      return setNavColor(true);
    } else if (window.scrollY > 70) {
      return setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <NavMenu menuActive={menuActive} navColor={navColor}>
      <Menu>
        <Logo menuActive={menuActive} navColor={navColor}>
          Achoo <span>BETA</span>
        </Logo>
        <Burguer
          className={`
              ${menuActive ? "active fas fa-times" : "fas fa-bars"}
            `}
          onClick={() => setActive(!menuActive)}
          navColor={navColor}
        />
        <MenuItems menuActive={menuActive} navColor={navColor}>
          <MenuItemsItem>
            <NavLink to="/">
              <Selected> {`>`} </Selected> FEATURES
            </NavLink>
          </MenuItemsItem>
          <MenuItemsItem>
            <NavLink to="/">
              <Selected> {`>`} </Selected> PRICING
            </NavLink>
          </MenuItemsItem>
          <MenuItemsItem>
            <NavLink to="/">
              <Selected> {`>`} </Selected> ABOUT
            </NavLink>
          </MenuItemsItem>
          <MenuItemsItem>
            <NavLink to="/">
              <Selected> {`>`} </Selected> CONTACT
            </NavLink>
          </MenuItemsItem>
          <Divider />
          <MenuItemsItem>
            <NavLink to="/">
              <Selected> {`>`} </Selected> LOGIN
            </NavLink>
          </MenuItemsItem>
          <MenuItemsItem>
            <NavLink to="/" className="sign">
              <Selected> {`>`} </Selected> SIGNUP
            </NavLink>
          </MenuItemsItem>
          <div className="flags">
            <div className="flag">
              <img src={flag} alt="England flag" />
            </div>
            <i className="down fas fa-angle-down"></i>
          </div>
        </MenuItems>
      </Menu>
    </NavMenu>
  );
};

export default NavbarMenu;
