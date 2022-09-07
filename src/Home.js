import React, { useState, useEffect } from "react";

import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setisLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="home">
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
      {/* {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )} */}
    </div>
  );
};
