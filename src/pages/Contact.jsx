import { useRef } from "react";
import emailjs from '@emailjs/browser'

import TitleBar from "../components/TitleBar";

import classes from "./Contact.module.css";

const Contact = () => {
    const form = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_sbrye7w", "template_s7fl9ab", form.current, "vGlUNrys7yZRY7py5")
    }

  return (
    <div>
      <TitleBar text="< Contact />" />
      <div className={classes.description}>
        <h1>
          Fill out the form below and let me know how I can help you. I will be
          in touch soon! Look forward to hearing from you!
        </h1>
      </div>
      <div className={classes.formWrapper}>
        <form ref={form} className={classes.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" name="message" />
          <span className={classes.buttonWrapper}>
            <button type="submit" onClick={submitHandler}>Submit</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
