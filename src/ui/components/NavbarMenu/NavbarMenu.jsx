import React,{useState} from 'react';
import { NavMenu,Menu, MenuItems, MenuItemsItem, Divider, Selected, Logo} from './NavbarStyled';
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  
  const [active, setActive] = useState(false);

  
  return (
    <NavMenu>
      <Menu>
        <Logo>Achoo <span>BETA</span></Logo>
        <i class="fas fa-bars burguer" onClick={() => setActive(!active)}/>
        <MenuItems active={active}>
          <MenuItemsItem >
            <NavLink to="/"><Selected> {`>`} </Selected> FEATURES</NavLink>
          </MenuItemsItem>
          <MenuItemsItem >
            <NavLink to="/"><Selected> {`>`} </Selected> PRICING</NavLink>
          </MenuItemsItem >
          <MenuItemsItem >
            <NavLink to="/"><Selected> {`>`} </Selected> ABOUT</NavLink>
          </MenuItemsItem >
          <MenuItemsItem >
            <NavLink to="/"><Selected> {`>`} </Selected> CONTACT</NavLink>
          </MenuItemsItem >
          <Divider />
          <MenuItemsItem >
            <NavLink to="/"><Selected> {`>`} </Selected> LOGIN</NavLink>
          </MenuItemsItem >
          <MenuItemsItem >
            <NavLink to="/"><Selected> {`>`} </Selected> SIGNUP</NavLink>
          </MenuItemsItem >
        </MenuItems>

      </Menu>
    </NavMenu>
  )
}

export default NavbarMenu;
