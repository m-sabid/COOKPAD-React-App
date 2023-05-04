import React, { useEffect, useState } from "react";

const Recipe = ({ name, ingredients, image }) => {
  const [profileImg, setProfileImg] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=juice&client_id=MbE1XMj7pdRElJnfBN5e6QwLAPi9WegETpvvo5W92_Y";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProfileImg(data.results.map((dt) => dt));
        setRandomIndex(Math.floor(Math.random() * data.results.length));
      });
  }, []);

  return (
    <>
      <div className="my-10 h-[70vh]">
        <div className="relative h-[70vh]">
          <div
            className="absolute capitalize top-0 left-0 w-full h-[70vh] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${profileImg[randomIndex]?.urls.small})`,
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-[70vh] flex justify-center items-center">
              <h1 className="text-4xl font-bold text-white text-center">
                {profileImg[randomIndex]?.alt_description}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 capitalize">
              {profileImg[randomIndex]?.alt_description}
            </h2>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.5 3C3.57 3 2 4.57 2 6.5c0 1.48.85 2.76 2.08 3.39a5 5 0 0 1 .96-1.31A3.49 3.49 0 0 0 5.5 7c1.93 0 3.5 1.57 3.5 3.5S7.43 14 5.5 14 2 12.43 2 10.5c0-.45.09-.89.24-1.3a3.49 3.49 0 0 0-.38-3.31A2.503 2.503 0 0 1 5.5 3z" />
                  <path d="M14.5 3c1.38 0 2.5 1.12 2.5 2.5S15.88 8 14.5 8s-2.5-1.12-2.5-2.5S13.12 3 14.5 3zm0-1C13.12 2 12 3.12 12 4.5S13.12 7 14.5 7 17 5.88 17 4.5 15.88 2 14.5 2z" />
                  <path d="M14.5 11c-1.93 0-3.5 1.57-3.5 3.5S12.57 18 14.5 18 18 16.43 18 14.5s-1.57-3.5-3.5-3.5zm0 5c-1.22 0-2.21-.99-2.21-2.21S13.28 11.5 14.5 11.5 16.71 12.49 16.71 13.71 15.72 16 14.5 16z" />
                </svg>
                <span className="text-gray-700">
                  Apples: a round fruit with a red, yellow, or green skin and a
                  white or pale yellow flesh. They are crunchy and slightly
                  sweet, and can be eaten raw or cooked in a variety of dishes.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.5 3C3.57 3 2 4.57 2 6.5c0 1.48.85 2.76 2.08 3.39a5 5 0 0 1 .96-1.31A3.49 3.49 0 0 0 5.5 7c1.93 0 3.5 1.57 3.5 3.5S7.43 14 5.5 14 2 12.43 2 10.5c0-.45.09-.89.24-1.3a3.49 3.49 0 0 0-.38-3.31A2.503 2.503 0 0 1 5.5 3z" />
                  <path d="M14.5 3c1.38 0 2.5 1.12 2.5 2.5S15.88 8 14.5 8s-2.5-1.12-2.5-2.5S13.12 3 14.5 3zm0-1C13.12 2 12 3.12 12 4.5S13.12 7 14.5 7 17 5.88 17 4.5 15.88 2 14.5 2z" />
                  <path d="M14.5 11c-1.93 0-3.5 1.57-3.5 3.5S12.57 18 14.5 18 18 16.43 18 14.5s-1.57-3.5-3.5-3.5zm0 5c-1.22 0-2.21-.99-2.21-2.21S13.28 11.5 14.5 11.5 16.71 12.49 16.71 13.71 15.72 16 14.5 16z" />
                </svg>
                <span className="text-gray-700">
                  Bananas: a long, curved fruit with a yellow or green skin and
                  a soft, creamy white flesh. They are sweet and slightly tangy,
                  and can be eaten raw or used in baking or smoothies.
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.5 3C3.57 3 2 4.57 2 6.5c0 1.48.85 2.76 2.08 3.39a5 5 0 0 1 .96-1.31A3.49 3.49 0 0 0 5.5 7c1.93 0 3.5 1.57 3.5 3.5S7.43 14 5.5 14 2 12.43 2 10.5c0-.45.09-.89.24-1.3a3.49 3.49 0 0 0-.38-3.31A2.503 2.503 0 0 1 5.5 3z" />
                  <path d="M14.5 3c1.38 0 2.5 1.12 2.5 2.5S15.88 8 14.5 8s-2.5-1.12-2.5-2.5S13.12 3 14.5 3zm0-1C13.12 2 12 3.12 12 4.5S13.12 7 14.5 7 17 5.88 17 4.5 15.88 2 14.5 2z" />
                  <path d="M14.5 11c-1.93 0-3.5 1.57-3.5 3.5S12.57 18 14.5 18 18 16.43 18 14.5s-1.57-3.5-3.5-3.5zm0 5c-1.22 0-2.21-.99-2.21-2.21S13.28 11.5 14.5 11.5 16.71 12.49 16.71 13.71 15.72 16 14.5 16z" />
                </svg>
                <span className="text-gray-700">
                  Oranges: a round fruit with a bright orange skin and a juicy,
                  pulpy flesh. They are sweet and tangy, and can be eaten raw or
                  used in juices or as a garnish in dishes.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
