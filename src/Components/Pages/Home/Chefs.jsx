import React, { useState, useEffect } from "react";
import Spinner from "../../Shared/Spinner";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [loading, setLoading] = useState(true);
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://cookpad-server.vercel.app/api/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-orange-600 text-center my-10 uppercase border-b-2">
        Our Professional Chefs
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {chefs.map((chef) => (
            <div key={chef.id} className="py-4">
              <ChefCard chef={chef} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chefs;
