import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-left">
        <Link to="/" className="links">
          <img
            src="CPlogo.png"
            alt="IMDB Logo"
          />
        </Link>
        <Link to="/movies/top_rated" className="links">
          Top Rated
        </Link>
        <Link to="/movies/popular" className="links">
          Popular
        </Link>
        <Link to="/movies/upcoming" className="links">
          Upcoming
        </Link>
        <Link to="/search" className="links">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Header;
