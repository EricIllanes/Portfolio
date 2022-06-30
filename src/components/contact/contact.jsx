import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Icon } from '@iconify/react';
import "./contact.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("mrgjvjal");
  if (state.succeeded) {
    return <p>Thanks for your message! I will reply as soon as possible</p>;
  }
  return (
    <div className="div-contact">
      <span className="contact-title">Contact</span>
      <div className="div-zone">
        <form onSubmit={handleSubmit}>
          <div className="div-name">
         
            <input placeholder="Name" className="input" type="text" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="div-email">
         
            <input
              placeholder="Email"
              required
              className="input"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="div-message">
      
            <textarea
              placeholder="Message"
              className="input"
              id="message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            className="button-submit"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
