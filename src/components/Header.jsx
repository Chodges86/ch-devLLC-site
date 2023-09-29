import { NavLink } from "react-router-dom";

import logo from "../assetts/site-header-logo.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <img src={logo} alt="" />
      <div className={classes.navList}>
        <NavLink to="/" className={() => classes.nav} end>
          Home
        </NavLink>
        <NavLink to="/contact" className={() => classes.nav} end>
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
