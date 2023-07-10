import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
const NavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg  navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  SimpliEdu
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeclassName="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/cart">
                      <FiShoppingCart/>
                      </NavLink>
                    </li>

                    <div class="links ">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="https://www.linkedin.com/in/𝗦𝗮𝗿𝘃𝗲𝘀𝗵-𝗣𝗮𝗻𝗱𝗲𝘆-68472a1bb"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
                      </a>
                      &nbsp;&nbsp;
                      <a
                        href="https://www.instagram.com/whoisrvsh/?igshid=ZDdkNTZiNTM%3D"
                        target="_blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      &nbsp;&nbsp;
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      &nbsp;&nbsp;
                      <a href="https://github.com/Sarvesssh" target="_blank">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
