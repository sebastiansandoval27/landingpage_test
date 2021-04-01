import React from "react";
import {
  ContactInfo,
  ContactNav,
  ContactNavItem,
  Divider,
  FooterComp,
  LogoFooter,
  Social,
} from "./FooterStyled";
import { achoo, support, contactInfo } from "../../../data/footerNavItems";

const Footer = () => {
  return (
    <FooterComp>
      <ContactNav>
        <ContactNavItem>
          <h2>Achoo</h2>
          <ul>
            {achoo.map((a) => (
              <li key={a.id}>
                <h3>{a.name}</h3>
              </li>
            ))}
          </ul>
        </ContactNavItem>
        <Divider />
        <ContactNavItem>
          <h2>Support</h2>
          <ul>
            {support.map((s) => (
              <li key={s.id}>
                <h3>{s.name}</h3>
              </li>
            ))}
          </ul>
        </ContactNavItem>
        <Divider />
        <ContactNavItem>
          <h2>Contact Us</h2>
          <ContactInfo>
            {contactInfo.map((c) => (
              <li key={c.id}>
                <h3>{c.name}</h3>
              </li>
            ))}
            <Social>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-flickr"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-skype"></i>
            </Social>
          </ContactInfo>
        </ContactNavItem>
      </ContactNav>
      <LogoFooter>
        <hr />
        <div className="logo">
          <h2>Achoo</h2>
          <span>Achoo ApS @ 2015</span>
        </div>
      </LogoFooter>
    </FooterComp>
  );
};

export default Footer;
