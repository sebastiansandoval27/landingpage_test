import styled from 'styled-components'


export const NavMenu = styled.nav`
  width:100%;
  height: 50px;
  position:absolute;
  top:0;
  left:0;
  background-color:transparent;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
`;

export const Menu = styled.div`
  width:100%;
  height:100%;
  background:transparent;
  display: flex;
  align-items:center;
  justify-content:space-between;
  padding: 0px 10px;

  i.burguer{
    font-size: 20px;
    color:white;  
  }
`;

export const Logo = styled.h2`
  font-size: 20px;
  color:white;
  font-family:Poppins;

  span{
    font-size: 10px;
    color:rgba(0,0,0,0.3);
  }
`;

export const MenuItems = styled.ul`
  position:absolute;
  top: 50px;
  left: ${props => props.active ? '0' : '-100%'};
  opacity: ${props => props.active ? '1' : '0'};
  transition: all .4s ease;
  width:100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
`;

export const MenuItemsItem = styled.li`

  width: 100%;
  height:25px;
  background: white;
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  margin: 10px 0px;
  padding: 10px;

  a{
    font-family:Poppins;
    color: rgba(0,0,0,0.6);
    display: flex;
    align-items:center;
    justify-content:center;
  }
`;

export const Divider = styled.div`
  width:85%;
  margin: 10px ;
  align-self:flex-start;
  height: 1px;
  background: rgba(0,0,0,0.5);
`;

export const Selected = styled.div`
  width: 15px;
  height: 15px;
  margin:0px 5px;
  border-radius:50%;
  display: flex;
  align-items:center;
  justify-content:center;
`;