import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import RecipesCard from "./RecipesCard";


const ChefRecipes = () => {
  const allRecipes = useLoaderData();

  const { bio, likes, name, picture, totalRecipes, experience, recipes } = allRecipes;
  return (
    <div>
      <div className="h-[60vh] flex justify-center">
        <img src={picture} alt="" className=" h-full rounded-lg object-top" />
      </div>
      <div className="flex gap-3">
        <h1 className="font-bold text-3xl border-b-2 border-orange-500">
          {name}
        </h1>
        <div className="text-white max-w-fit px-3 py-2 rounded-lg bg-orange-500">
          <strong className="flex gap-3 justify-center items-center">
            {likes} <FaThumbsUp />
          </strong>
        </div>
      </div>
      <ul className="my-3 bg-orange-300 max-w-fit p-3 rounded font-bold">
        <li>Experience: {experience} Years of experience</li>
        <li>Total Recipes: {totalRecipes}</li>
      </ul>
      <p className="text-justify"><strong>Bio: </strong>{bio}</p>
      {
        recipes.map((rp)=>{
          return(
            <div key={rp.id}>
              <RecipesCard rp={rp} />
            </div>
          )
        })
      }      
    </div>
  );
};

export default ChefRecipes;
