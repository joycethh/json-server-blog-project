import React, { useState } from "react";
import { blogsData } from "./blogsData";

export const Home = () => {
  const [blogs, setBlogs] = useState(blogsData);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
