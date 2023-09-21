import classes from "./AboutProcess.module.css";
import processGraphic from "../assetts/process-images.png";

const AboutProcess = () => {
  return (
    <div className={classes.aboutProcessView}>
      <h1>About the Process</h1>
      <div className={classes.aboutProcessContent}>
        <div>
          <p>
            The process for getting your website up and running requires several
            things: , , and most important.... good communication.
          </p>
          <p style={{margin: 0}}>good planning</p>
          <p style={{margin: 0}}>a great design</p>
          <p style={{margin: 0}}>and beautiful code!</p>
          <p>
            But the most important thing is good communication. During the
            process, we will be working together accomplish several tasks that
            come together and result in your website.
          </p>
          <p>Below I’ve provided a rough outline of what this looks like.</p>
        </div>
        <img src={processGraphic} alt="" />
      </div>
    </div>
  );
};

export default AboutProcess;
