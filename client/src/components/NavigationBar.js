import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav__container">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="active"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="active"
              exact
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="active" to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
