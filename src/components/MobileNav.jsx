import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

import MenuOpen from "../assets/MenuOpen";
import MenuClose from "../assets/MenuClose";

// menu variant
const menuAnimation = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { ease: [0.5, 0.01, -0.05, 0.9] } },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="lg:hidden">
      {/* menu open icon */}
      <div onClick={() => setOpenMenu(true)}>
        <MenuOpen />
      </div>

      {/* menu */}
      <motion.div
        variants={menuAnimation}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white h-screen w-full shadow-2xl max-w-xs absolute top-0 right-0 z-20"
      >
        {/* mene close icon */}
        <div onClick={handleMenuClose} className="absolute top-7 left-7">
          <MenuClose />
        </div>

        {/* navigation links */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-9 font-bold text-3xl">
          <li>
            <NavHashLink
              smooth
              to="#home"
              onClick={handleMenuClose}
              className={`text-gray-700 transition px-5 pb-4`}
            >
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              smooth
              to="#about"
              onClick={handleMenuClose}
              className={`text-gray-700 transition px-5 pb-4`}
            >
              About
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              smooth
              to="#portfolio"
              onClick={handleMenuClose}
              className={`text-gray-700 transition px-5 pb-4`}
            >
              Portfolio
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              smooth
              to="#contact"
              onClick={handleMenuClose}
              className={`text-gray-700 transition px-5 pb-4`}
            >
              Contact
            </NavHashLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
