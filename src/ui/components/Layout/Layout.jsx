import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const LayoutComp = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutComp>
      <NavbarMenu />
      {children}
      <Footer />
    </LayoutComp>
  );
};

export default Layout;
