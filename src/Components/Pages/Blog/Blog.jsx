import React from "react";

const Blog = ({ blogImage, title, author, time, answer }) => {
  const dateTimeString = time;
  const dateTime = new Date(dateTimeString);
  const formattedDateTime = dateTime.toLocaleString();
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden my-10">
        <div className="px-6 py-4">
          <div className="w-full h-[300px] overflow-hidden relative rounded-md">
            <div className="bg-black absolute h-[300px] w-full opacity-50 flex items-center justify-center">
              <h2 className="text-white z-10 text-4xl font-bold mb-2">
                {title}
              </h2>
            </div>            
            <img
              src={blogImage}
              alt="Profile image"
              className="w-full object-cover h-full"
            />
          </div>
          <div className="py-5">
            <h2 className="text-blue-500 text-4xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              By {author} on {formattedDateTime}
            </p>
            <p className="text-gray-800 text-base">{answer}</p>
          </div>
        </div>
        <div className="bg-gray-200 px-6 py-5"></div>
      </div>
    </>
  );
};

export default Blog;
