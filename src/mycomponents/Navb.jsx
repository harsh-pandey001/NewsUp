import React from "react";
import { Link} from "react-router-dom";


const Navb = (props) => {
 
    return (
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsUp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/General">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.name}{" "}
            </label>
          </div>
        </div>
      </nav>
    );
  
}

export default Navb;
