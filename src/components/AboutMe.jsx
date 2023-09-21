import classes from "./AboutMe.module.css";

import profileImg from "../assetts/about-me-image.png";

const AboutMe = () => {
  return (
    <>
      <div className={classes.aboutMeTitle}>
        <h1>About Me</h1>
      </div>
      <div className={classes.aboutMe}>
        <img src={profileImg} alt="" />
        <div>
          <p>
            CH Developments and Designs, LLC is a company created by me, Caleb
            Hodges. I’m a web developer specializing in creating websites and
            web applications for small businesses and organizations.
          </p>
          <p>
            As a freelance developer, I’m able to offer these services at much
            more affordable prices than other web agencies. I’m a one man show,
            so when you hire me you only have one person to deal with. If you
            need anything, I’m always just an email or phone call away. I strive
            to make sure I provide quality service and products and I’m not
            afraid to tackle challenges and learn new things to help me grow in
            my technical abilities. sit.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
