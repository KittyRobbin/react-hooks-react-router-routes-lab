import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
  <NavLink exact to="/" SelectedClassName="Selected">
    Home
  </NavLink>
  <NavLink to="/movies" SelectedClassName="Selected">
    Movies
  </NavLink>
  <NavLink to="/directors" SelectedClassName="Selected">
    Directors
  </NavLink>
  <NavLink to="/actors" SelectedClassName="Selected">
    Actors
  </NavLink>
  </div>
  );
}

export default NavBar;
