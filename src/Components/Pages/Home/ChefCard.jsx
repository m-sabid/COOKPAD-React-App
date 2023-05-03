import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
        <img
          className="w-full h-48 object-cover object-top"
          src={chef.picture}
          alt={chef.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{chef.name}</div>
          <p className="text-gray-700 text-base mb-2">
            {chef.experience} years of experience, {chef.recipes} recipes
          </p>
          <p className="text-gray-700 text-base mb-2">Likes: {chef.likes}</p>
          <Link to={`chef-recipes/${chef.id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
