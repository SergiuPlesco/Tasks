import React from "react";
import { NavLink, Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bloglist__container">
      <ul className="bloglist">
        <li className="bloglist__item">
          <Link className="bloglist__link" exact="true" to="/blog/1">
            Post One
          </Link>
        </li>
        <li className="bloglist__item">
          <NavLink className="bloglist__link" exact to="/blog/2">
            Post Two
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
