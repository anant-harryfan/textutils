import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

export default function Navbar(props) {
   /* green btn "#34c567a6", graybtn "#9c99983b", redbtn "#0ae7ff7a", neonbtn '#ff21009c'  */
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.aboutT}
              </Link>
            </li>
            <li className="mx-3">
            <button type="button" className="btn btn-info btn-circle btn-sm" onClick={()=>{props.theme("rgb(41 131 149)", "White", "info")}}>
              Neon
              </button>
            </li>
            <li className="mx-3">
              <button type="button" className="btn btn-secondary btn-circle btn-sm" onClick={()=>{props.theme("rgb(69 82 85)", "White", "secondary")}}>
                Gray
              </button>
            </li>
            <li className="mx-3">
              <button type="button" className="btn btn-success btn-circle btn-sm" onClick={()=>{props.theme("rgb(6 92 13)", "White", "success ")}}>
               
                Green
              </button>
            </li>
            <li className="mx-3">
              <button type="button" className="btn btn-danger btn-circle btn-sm" onClick={()=>{props.theme("rgb(67 7 7)", "White", "danger")}}>
                Red
              </button>
            </li>
          </ul>

          <div
            className={`form-check form-switch mx-3 text-${
              props.mode == "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.text}
            </label>
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={`btn btn-${props.typo}`} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
// chrck karta ki jo value hai vo string hai na
// Navbar.propTypes = {title: PropTypes.string, aboutT: PropTypes.string}

// jisme isRequired hai usko value dena hi hoga
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutT: PropTypes.string.isRequired,
};

// kuch nahi to ye hi hai jo hai
// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutT: 'Set about here'
// }
