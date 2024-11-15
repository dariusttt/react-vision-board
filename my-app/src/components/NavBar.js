import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    color: "#00D4FF",
    padding: "10px 20px",
    marginRight: "20px",
    background: "#0D2E4E",
    textDecoration: "inherit", /* no underline */
    borderRadius: "10px"
  };

  const activeClassName = {
    border: "solid #00D4FF 2px",
    fontWeight: "bold"
  };

    return(
        <div id="nav-bar">
          <h1 className="site-title">
              VISION+BOARD
          </h1>
          <NavLink
            to="/"
            /* set "exact" so it knows to only set activeStyle when route is deeply equal to link */
            exact
            style={linkStyles}
            /* add prop for activeStyle */
            activeClassName={activeClassName}
            >Home
            </NavLink>
          <NavLink
            to="/goals"
            exact
            style={linkStyles}
            activeClassName={activeClassName}
            >Goals</NavLink>

        <NavLink
            to="/accomplishments"
            exact
            style={linkStyles}
            activeClassName={activeClassName}
            >Accomplishments</NavLink>
        </div>
    );
}

export default NavBar;