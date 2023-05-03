import React from "react";
import Chefs from "../../Components/Pages/Home/Chefs";
import Header from "../../Components/Pages/Home/Header";
import Recipe from "../../Components/Pages/Home/Recipe";
import RecipeReviews from "../../Components/Pages/Home/RecipeReviews";
import Footer from "../../Components/Shared/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Recipe />
      <Chefs />
      <RecipeReviews />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
