import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [input, setInput] = useState({
    title: "",
    body: " ",
    author: " ",
  });
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = input;
    fetch("https://jsonserver-blog-app.herokuapp.com/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setIsPending(true);
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="create">
      <h2> Add a New Blog</h2>
      <form>
        <label>Title: </label>
        <input
          name="title"
          type="text"
          value={input.title}
          onChange={handleChange}
        />
        <label>Content:</label>
        <textarea
          name="body"
          type="text"
          value={input.body}
          onChange={handleChange}
        />
        <label>Author</label>
        <input
          name="author"
          type="text"
          value={input.author}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {isPending ? "Adding the new blog" : "Submit"}
        </button>
      </form>
    </div>
  );
};
