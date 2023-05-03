import React from "react";
import ChefRecipes from "../../Components/Pages/ChefRecipes/ChefRecipes";
import TopNav from "../../Components/Shared/TopNab";

const ChefRecipesPage = () => {
  return (
    <div>
      <TopNav />
      <div className="container mx-auto">
        <ChefRecipes />
      </div>
    </div>
  );
};

export default ChefRecipesPage;
