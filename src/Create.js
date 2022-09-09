import React, { useState } from "react";

export const Create = () => {
  const [input, setInput] = useState({
    title: "",
    body: " ",
    author: " ",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = input;
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => console.log("post request", fetch()));
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
        <select>
          <option value={input.author}>{input.author}</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
