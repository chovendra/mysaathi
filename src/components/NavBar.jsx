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
    <nav className="bg-white fixed w-full shadow-blue-300 shadow-md z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between lg:py-5 h-[70px] lg:h-[90px]">
        {/* Logo */}
  <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center justify-center h-[65px] w-[100px] lg:h-[100px] lg:w-[160px] overflow-hidden">
  <img
    src="/images/saathi.jpg"
    alt="Logo"
    className="h-[200px] w-[100px] lg:h-[90px] lg:w-[140px] object-contain"
  />
</Link>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5">
          <Link to="/" className={navItemClass("/")}>
            Home
          </Link>
          <Link to="/matches" className={navItemClass("/matches")}>
            Matches
          </Link>
          <Link to="/mailbox" className={navItemClass("/mailbox")}>
            Mail Box
          </Link>
          <Link to="/chats" className={navItemClass("/chats")}>
            Chats
          </Link>
          <Link to="/login">
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 py-4 space-y-4 text-lg bg-white shadow-inner transition-all duration-300 ease-in-out">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={navItemClass("/")}
          >
            Home
          </Link>
          <Link
            to="/matches"
            onClick={() => setIsOpen(false)}
            className={navItemClass("/matches")}
          >
            Matches
          </Link>
          <Link
            to="/mailbox"
            onClick={() => setIsOpen(false)}
            className={navItemClass("/mailbox")}
          >
            Mails
          </Link>
          <Link
            to="/chats"
            onClick={() => setIsOpen(false)}
            className={navItemClass("/chats")}
          >
            Chats
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Login / Signup
            </button>
          </Link>
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex justify-center"
          >
            <User className="w-8 h-8 text-gray-700 hover:text-red-600" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
