import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">C_O_O_K_P_A_D</h3>
            <p className="text-sm mb-4">
              We provide delicious and healthy recipes for food enthusiasts and
              home cooks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Recipes</h3>
            <ul className="ml-2">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Snacks
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Desserts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Recipes</h3>
            <ul className="ml-2">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Avocado Toast
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Chicken Alfredo
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Chocolate Chip Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Guacamole
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Macaroni and Cheese
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="ml-2">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Others
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
