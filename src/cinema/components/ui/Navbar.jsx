import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/main.css";
import "./navbarstyles.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom-styles">
      <NavLink className="navbar-brand" to={'/'}>
        Cinema Expert
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to={'/'}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
           
             <NavLink className="nav-link" to={'/favorites'}>
             Favorites
             </NavLink>
     
          </li>
        </ul>
      </div>

      <div className="user-account">
        <ul className="user-account-display">
          <li>
            <NavLink to={'auth/login'}>
            Login
            </NavLink>
          </li>
          <li>
            <NavLink to={'auth/register'}>
            Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
