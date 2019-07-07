// Componente para mostrar informacion, pero solo para el componente AboutPage

import React from "react";
// Se hace el import del componente Title, que es para los encabezados del componente
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    //   Se utiliza una seccion que tiene padding de la clase bootstrap
    <section className="py-5">
      {/* Se utiliza la clase container para poder utilizar row y a su vez el sistema de columnas de bootstrap */}
      <div className="container">
        Se crea la fila
        <div className="row">
          {/* Se crean las columnas en donde en tamaños pequeños las columnas serán de 10 y centradas, y en tamaños medianos las columnas seran de 6 */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGray)" }}
              alt="About Company"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            {/* Se renderiza el componente Title y se menda la prop title */}
            <Title title="about us" />
            <p className="text-lead text muted my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              debitis odio ad iusto magni velit quae impedit nulla illum
              reprehenderit.
            </p>
            <p className="text-lead text muted my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              debitis odio ad iusto magni velit quae impedit nulla illum
              reprehenderit.
            </p>

            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
