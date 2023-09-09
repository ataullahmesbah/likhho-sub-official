import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={`bg-white font-[Poppins] z-10 sticky top-0 ${open ? "shadow-lg" : ""}`}>
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="flex items-center justify-center gap-4">
            <img src='https://i.ibb.co/8rbKVY1/image.png' alt="logo" className="md:cursor-pointer h-9" />
            <h1 className="font-semibold">LikhoEditor</h1>
          </div>
          <div className="text-3xl md:hidden" onClick={handleMenuClick}>
            <FaBars className={`text-purple-800`} />
          </div>
        </div>
        {/* Desktop menu */}
        <ul className={`md:flex uppercase items-center gap-8 font-[Poppins] md:block hidden ${open ? "hidden" : "block"}`}>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className={`md:block hidden ${open ? "hidden" : "block"}`}>
          <Button />
        </div>
      </div>
      {/* Mobile menu */}
      <ul
        className={`
          md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-0" : "-left-full"}
        `}
      >
        <li>
          <Link to="/" className="py-7 px-3 inline-block">
            Home
          </Link>
        </li>
        <NavLinks />
        <div className="py-5">
          <Button />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
