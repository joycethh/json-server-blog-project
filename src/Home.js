import React from "react";

import { BlogList } from "./BlogList";
import useFetch from "./useFetch";

export const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://jsonserver-blog-app.herokuapp.com/blogs");

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

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};
