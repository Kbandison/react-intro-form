import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="site-logo">MovieForm</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movie-list">Movie List</Link>
      </nav>
      <Outlet />
    </header>
  );
}
