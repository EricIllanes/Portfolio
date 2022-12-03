import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("mrgjvjal");
  if (state.succeeded) {
    return <p>Gracias por tu mensaje! Responderé a la brevedad posible.</p>;
  }
  return (
    <div className="div-contact">
      <span className="contact-title">Contacto</span>
      <div className="div-zone">
        <form onSubmit={handleSubmit}>
          <div className="div-name">
         
            <input placeholder="Nombre" className="input" type="text" required />
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
              placeholder="Mensaje"
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
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
