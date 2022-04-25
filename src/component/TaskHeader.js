import React from "react";
import { Link } from "react-router-dom";

export function TaskHeader() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-orange-100 w-[100%]">
      <div className="container px-4 px-lg-5">
        <Link to="/">
          <a className="navbar-brand" href="#!">
            Cat Shop
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <i className="fas fa-shopping-cart ml-1"></i>
              {/* <span className="badge bg-dark text-white ms-1 rounded-pill">
                2
              </span> */}
            </button>
          </form>
          <div className="ml-6 btn btn-outline-dark rounded ">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
