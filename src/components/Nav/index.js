import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="topNav">
      <NavLink activeClassName="active1" to="/" exact>
        Home
      </NavLink>

      <NavLink activeClassName="active1" to="/timer">
        Timer
      </NavLink>

      <NavLink activeClassName="active1" to="/youtube">
        Youtube
      </NavLink>

      <NavLink activeClassName="active1" to="/blog">
        Blogs App
      </NavLink>

      <NavLink activeClassName="active1" to="/about">
        About
      </NavLink>
    </div>
  );
}

export default Nav;
