import React from "react";
import { NavLink, Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <ul>
        <li>
          <Link exact="true" to="/blog/1">
            Post One
          </Link>
        </li>
        <li>
          <NavLink exact to="/blog/2">
            Post Two
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
