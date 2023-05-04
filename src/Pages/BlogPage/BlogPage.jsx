import React, { useEffect, useState } from "react";
import TopNav from "../../Components/Shared/TopNab";
import Footer from "../../Components/Shared/Footer";
import Spinner from "../../Components/Shared/Spinner";
import Blog from "../../Components/Pages/Blog/Blog";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  });

  return (
    <>
      <TopNav />
      <div className="container mx-auto">
        {loading && <Spinner />}
        {blogs.map((dt) => {
          return (
            <div key={dt.id}>
              <Blog
                blogImage={dt.blogImage}
                title={dt.question}
                author={dt.author}
                time={dt.time}
                answer={dt.answer}
              />
            </div>
          );
        })}

        {/* Blogs */}
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
