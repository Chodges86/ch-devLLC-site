import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

import { IconContext } from "react-icons";
import { BiLogoLinkedin } from "react-icons/bi";
// import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.navList}>
        <NavLink to="/" className={() => classes.nav} end>
          Home
        </NavLink>
        <NavLink to="/contact" className={() => classes.nav} end>
          Contact Me
        </NavLink>
      </div>
      <div className={classes.socials}>
        <a href="https://www.linkedin.com/in/caleb-hodges-a00a3b22b/" target="_blank" rel="noreferrer">
          <IconContext.Provider value={{ color: "#eeeeee", size: "75%" }}>
            <BiLogoLinkedin />
          </IconContext.Provider>
        </a>
        {/* <a href="mailto:chodgesdev@gmail.com">
          <IconContext.Provider value={{ color: "#eeeeee", size: "75%" }}>
            <HiMail />
          </IconContext.Provider>
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
