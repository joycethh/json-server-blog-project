import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "./useFetch";

export const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
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

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};
