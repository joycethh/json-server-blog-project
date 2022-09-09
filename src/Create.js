import React, { useState } from "react";

export const Create = () => {
  const [input, setInput] = useState({
    title: "",
    body: " ",
    author: " ",
  });
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = input;
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    }).then(() => setIsPending(true));
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
