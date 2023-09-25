import { useState } from "react";

import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Service from "../components/Service";
import TitleBar from "../components/TitleBar";
import classes from "./Home.module.css";

import modal from "../data/data";
import AboutMe from "../components/AboutMe";
import AboutProcess from "../components/AboutProcess";
import ProcessList from "../components/ProcessList";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [details, setDetails] = useState(null);

  const clickHandler = (itemClicked) => {
    const element = document.getElementById("servicesTitle");
    element.scrollIntoView();
    setDetails(modal[itemClicked]);
  };

  return (
    <div>
      <Helmet>
        <title>CH Devs LLC.</title>
        <meta
          name="description"
          content="CH Developments and Designs, LLC. is a web development company out of Hernando, MS offering affordable prices for web development to small businesses and organizations"
        />
      </Helmet>
      <TitleBar text="<Beauty between the Brackets/>" />
      <div className={classes.overview}>
        <p>
          Your website begins and ends with angle brackets. What we do between
          the brackets is art! Web development is an art form that brings
          together graphics, design, and beautifully written code that results
          in a website custom built with your vision in mind. Together, we can
          create something beautiful. I specialize in building websites for
          small businesses and organizations that want the benefit of having a
          web developer without the price tag that comes with hiring a web
          agency.
        </p>
      </div>
      <h1 className={classes.servicesTitle} id="servicesTitle">
        Services
      </h1>
      {!details ? (
        <div className={classes.services} id="service">
          <Service
            text="Custom Websites"
            img={modal.customWebsite.img}
            id="customWebsite"
            handler={clickHandler}
            href="service"
          />
          <Service
            text="Hosting Setup and Maintenance"
            img={modal.hosting.img}
            id={"hosting"}
            handler={clickHandler}
          />
          <Service
            text="Professional Domain Email setup with access to Google Workspace Apps"
            img={modal.google.img}
            id="google"
            handler={clickHandler}
          />
          <Service
            text="Customized Productivity setups through Google Workspace Apps"
            img={modal.productivity.img}
            id="productivity"
            handler={clickHandler}
          />
          <Service
            text="Graphic Design"
            img={modal.graphicDesign.img}
            id="graphicDesign"
            handler={clickHandler}
          />
          <div className={classes.contactLink}>
            <h1>
              At affordable prices! <a href="/contact">Contact</a> me today and
              let's get started
            </h1>
          </div>
        </div>
      ) : (
       
        <div className={classes.detailView}>
          <Helmet>
            <title>{`CH Devs LLC. - ${details.title}`}</title>
            <meta name="description" content={details.description}/>
          </Helmet>
          <div className={classes.closeCircle}>
            <IconContext.Provider value={{ size: "20px" }}>
              <AiOutlineCloseCircle onClick={() => setDetails(null)} />
            </IconContext.Provider>
          </div>
          <img src={details.img} alt={`artist drawing depicting a generalization of ${details.title}`} />
          <h1>{details.title}</h1>
          <div className={classes.details}>{details.jsx}</div>
        </div>
      )}
      <AboutMe />
      <AboutProcess />
      <ProcessList />
    </div>
  );
};

export default Home;
