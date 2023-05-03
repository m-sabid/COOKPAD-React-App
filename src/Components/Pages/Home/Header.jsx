import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

const Header = () => {
  const [profileImg, setProfileImg] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=recipe&client_id=MbE1XMj7pdRElJnfBN5e6QwLAPi9WegETpvvo5W92_Y";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProfileImg(data.results.map((dt) => dt.urls.small));
        setRandomIndex(Math.floor(Math.random() * data.results.length));
      });
  }, []);

  return (
    <header className="container mx-auto header flex flex-col md:flex-row justify-between items-center md:max-h-[32rem] max-h-full md:min-h-[32rem] overflow-hidden">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl md:text-4xl font-bold leading-tight">
          Feast from the Experts <br />
          <span className="text-orange-600">
            {" "}
            Ultimate chef recipe collection.
          </span>
        </h1>
        <p className="my-5 w-full md:w-3/4 border-l-4 pl-2">
          Discover a world of flavors with "Feast from the Experts," featuring
          top chef recipes from around the globe.
        </p>
        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2 rounded-lg mt-10">
        <LazyLoad once>
          <img
            src={profileImg[randomIndex]}
            alt="Profile image"
            className="w-full object-cover h-full rounded-lg"
          />
        </LazyLoad>
      </div>
    </header>
  );
};

export default Header;
