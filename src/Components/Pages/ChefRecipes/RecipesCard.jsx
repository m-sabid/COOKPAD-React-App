import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BsFillBookmarkFill } from "react-icons/bs";

function RecipeCard({ rp }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleBookmarkClick = () => {
    toast("Added to Bookmark")
    setIsButtonDisabled(true);
  };

  return (
    <div className="max-w-full my-5 rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-96 object-cover rounded-md"
        src={rp.picture}
        alt={rp.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex items-center gap-3">
          {rp.name}
          <button onClick={handleBookmarkClick} disabled={isButtonDisabled}>
            <BsFillBookmarkFill />
            <ToastContainer />
          </button>
        </div>
        <div className="flex items-center mb-2">
          <svg
            className="h-4 w-4 fill-current text-yellow-500 mr-1"
            viewBox="0 0 20 20"
          >
            <path d="M10 1l2.928 6.135 6.572.955-4.745 4.601 1.121 6.514L10 15.661l-5.876 3.079 1.121-6.514L.5 8.09l6.572-.955L10 1z" />
          </svg>
          <span className="text-gray-700">{rp.rating}</span>
        </div>
        <div className="px-6">
          <h4 className="text-xl font-bold my-3">Ingredients</h4>
          <ul className="text-gray-700 text-base">
            {rp.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <h4 className="text-xl font-bold my-3">Method</h4>
        <p className="text-gray-700 text-base">{rp.method}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
