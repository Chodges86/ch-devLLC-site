import classes from "./Service.module.css";


const Service = (props) => {

 
  return (
    <div className={classes.serviceWrapper} onClick={() => props.handler(props.id)}>
      <div className={classes.service}>
        <span className={classes.firstSection}>
          <img src={props.img} alt={`artistic drawing depicting a generalization of ${props.text}`} />
        </span>
        <span className={classes.secondSection}>
          <h1>{props.text}</h1>
        </span>
      </div>
    </div>
  );
};

export default Service;
