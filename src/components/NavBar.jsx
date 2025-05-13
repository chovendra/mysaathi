import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItemClass = (path) =>
    `text-gray-700 hover:text-red-600 ${
      isActive(path) ? "text-red-600 font-semibold underline" : ""
    }`;

  return (
    <nav className="bg-white fixed shadow-orange-300 shadow-md z-20 w-full">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
        <img
        src="/images/saathi.jpg"
        alt="Logo"
        className="h-28 w-28 lg:h-18 lg:w-32 object-cover"
      />

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 items-center">
          <Link to="/" className={navItemClass("/")}>
            Matches
          </Link>
          <Link to="/intrests" className={navItemClass("/intrests")}>
            Intrests
          </Link>
          <Link to="/" className={navItemClass("/")}>
            Membership
          </Link>
          {/* <Link to="/contact" className={navItemClass("/contact")}>
            Contact Us
          </Link> */}
          <Link to="/login">
            <button className="bg-blue-900 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Login / Signup
            </button>
          </Link>
          <Link to="/profile">
            <User className="w-10 h-10 text-white bg-blue-900 p-2 rounded-full hover:bg-blue-600 cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={36} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 py-4 space-y-4 text-xl bg-white shadow-inner">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={navItemClass("/")}
          >
            Home
          </Link>
          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className={navItemClass("/donate")}
          >
            Donate
          </Link>
          <Link
            to="/about-us"
            onClick={() => setIsOpen(false)}
            className={navItemClass("/about-us")}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={navItemClass("/contact")}
          >
            Contact Us
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Login / Signup
            </button>
          </Link>
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="mx-auto"
          >
            <User className="w-8 h-8 text-gray-700 hover:text-red-600" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
