import React, { useState, useEffect } from "react";
import { blogsData } from "./blogsData";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect got fired");
    console.log("blogs-state", blogs);
  });
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};
