import React from "react";

// se importa el componente para los titulos
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          {/* Se manda a llamar el componente Title en donde se mandan las props title y center */}
          <Title title="Contact us" center />
          <form
            className="mt-5"
            action="https://formspree.io/geraz26@hotmail.com"
            method="POST"
          >
            {/* First Name */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Gerardo García"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>

            {/* Subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Important!"
              />
            </div>

            {/* Message */}

            <div className="form">
              <textarea
                className="form-control"
                name="mesagge"
                rows="10"
                placeholder="Message"
              />
            </div>

            {/* Submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
