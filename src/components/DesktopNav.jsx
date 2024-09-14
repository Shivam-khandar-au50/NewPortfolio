import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const DesktopNav = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <nav className="hidden lg:flex gap-x-12 font-semibold">
      <NavHashLink
        smooth
        to="#about"
        onClick={() => {
          setHome(false);
          setAbout(true);
          setPortfolio(false);
          setContact(false);
        }}
        className="text-gray-700 transition px-5"
      >
        About
      </NavHashLink>
      <NavHashLink
        smooth
        to="#portfolio"
        onClick={() => {
          setHome(false);
          setAbout(false);
          setPortfolio(true);
          setContact(false);
        }}
        className="text-gray-700 transition px-5"
      >
        Portfolio
      </NavHashLink>
      <NavHashLink
        smooth
        to="#contact"
        onClick={() => {
          setHome(false);
          setAbout(false);
          setPortfolio(false);
          setContact(true);
        }}
        className="text-gray-700 transition px-5"
      >
        Contact
      </NavHashLink>
    </nav>
  );
};

export default DesktopNav;
