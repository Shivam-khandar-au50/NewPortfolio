import React from "react";
import { NavHashLink } from "react-router-hash-link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="z-10 w-full h-20 lg:h-24 fixed px-9 lg:px-24 flex items-center">
      <div className="w-full flex lg:flex-row items-center justify-between">
        {/* logo image */}
        <NavHashLink smooth to="#home">
          <img src={Logo} alt="" className="w-7 lg:w-9 lg:h-9 h-7" />
        </NavHashLink>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
