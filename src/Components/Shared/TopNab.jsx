import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="bg-orange-500 mb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to={"/"} className="text-white text-xl font-semibold">
                C_O_O_K_P_A_D
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="ml-4 flex space-x-4">
                <li>
                  <a href="#" className="text-white hover:text-orange-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-orange-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-orange-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-orange-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="block md:hidden">
              <button
                className="text-white hover:text-orange-200 focus:outline-none focus:text-white"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16ZM4 4V6H20V4H4Z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li>
                <a href="#" className="text-white hover:text-orange-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default TopNav;
