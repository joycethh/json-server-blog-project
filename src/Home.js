import React, { useState, useEffect } from "react";

import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      // .then((res) => res.json())
      // adding error boundary
      .then((res) => {
        console.log("res", res);
        if (!res.ok) {
          throw Error(`Coudln't fetch data from the resource`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })

      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);
  return (
    <div className="home">
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      {isLoading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}

      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};
