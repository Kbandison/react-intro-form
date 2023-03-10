import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="nav-header">
        <h1 className="site-logo">MovieForm</h1>
        <nav className="nav-bar">
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="/movie-list" className="movie-list-link">
            Movie List
          </Link>
        </nav>
      </div>
      <Outlet />
    </header>
  );
}
