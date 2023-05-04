import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/error404.png";


function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <img src={errorImage} alt="Error 404" className="w-96 mb-8" />
      <h1 className="text-4xl font-bold mb-4">Oops! Page not found</h1>
      <p className="text-lg mb-4">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Go back to homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
