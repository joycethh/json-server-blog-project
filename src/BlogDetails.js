import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useFetch } from "./useFetch";

export const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/", { replace: true }));
  };
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
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};
