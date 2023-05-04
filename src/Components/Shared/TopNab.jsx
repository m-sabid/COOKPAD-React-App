import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { user, logout } = useContext(AuthContext);

  const handelLogout = () => {
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
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
                  <Link to={"/"} className="text-white hover:text-orange-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-white hover:text-orange-200">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-white text-3xl hover:text-orange-200"
                  >
                    {user && <FaUserCircle />}
                  </Link>
                </li>
                <li>
                  {user ? (
                    <button onClick={handelLogout}>
                      <Link
                        to={"/"}
                        className="text-orange-500 bg-white p-2 rounded font-bold hover:bg-orange-200 hover:text-black"
                      >
                        Logout
                      </Link>
                    </button>
                  ) : (
                    <Link
                      to={"/login"}
                      className="text-orange-500 bg-white p-2 rounded font-bold hover:bg-orange-200 hover:text-black"
                    >
                      Login
                    </Link>
                  )}
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
                <Link to={"/"} className="text-white hover:text-orange-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white hover:text-orange-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white hover:text-orange-200">
                  User profile picture
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white hover:text-orange-200">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default TopNav;
