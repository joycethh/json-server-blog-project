import React, { useState } from "react";
import { blogsData } from "./blogsData";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState(blogsData);
  return (
    <div className="home">
      <BlogList blogs={blogs} key={blogs.id} />
    </div>
  );
};
