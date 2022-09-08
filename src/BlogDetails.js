import React from "react";
import { useParams } from "react-router-dom";

export const BlogDetails = () => {
  const { id } = useParams();

  return <div className="blog-detail">BlogDetails- {id} </div>;
};
