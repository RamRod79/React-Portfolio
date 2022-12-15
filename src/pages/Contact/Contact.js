// import React, { useContext } from 'react'

import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6n9rvwc",
        "template_arofw9b",
        form.current,
        "EFGihzfZD5Qt2Gd_Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="card mt-4">
        <h2>Contact</h2>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label className="label">Name</label>
          <input className="textarea" type="text" name="user_name" />
          <label className="label">Email</label>
          <input className="textarea" type="email" name="user_email" />
          <label className="label">Message</label>
          <textarea className="textarea" name="message" />
          <input className="input" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
