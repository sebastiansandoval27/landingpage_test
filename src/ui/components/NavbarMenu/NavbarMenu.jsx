import React,{useState} from 'react';
import { NavMenu,Menu, MenuItems, MenuItemsItem, Divider, Selected, Logo, Burguer} from './NavbarStyled';
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  
  const [menuActive, setActive] = useState(false);

  
  return (
    <NavMenu menuActive={menuActive}>
      <Menu>
        <Logo menuActive={menuActive}>Achoo <span>BETA</span></Logo>
        <Burguer 
            className={`
              ${menuActive ? 'active fas fa-times' : 'fas fa-bars'}
            `} 
            onClick={() => setActive(!menuActive)} 
        />
        <MenuItems menuActive={menuActive}>
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
            <NavLink to="/" className="sign"><Selected> {`>`} </Selected> SIGNUP</NavLink>
          </MenuItemsItem >
          <MenuItemsItem >
            <NavLink to="/">
              <div className="flags">
                <i className="flag fab fa-canadian-maple-leaf"></i>
                <i className="down fas fa-angle-down"></i>
              </div>
            </NavLink>
          </MenuItemsItem >
        </MenuItems>

      </Menu>
    </NavMenu>
  )
}

export default NavbarMenu;
