import classes from "./TitleBar.module.css";

const TitleBar = (props) => {
  return (
    <div className={classes.titleBar}>
      <h1>{props.text}</h1>
    </div>
  );
};

export default TitleBar;
