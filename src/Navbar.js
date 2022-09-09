import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create New Blog</Link>
      </div>
    </nav>
  );
};
