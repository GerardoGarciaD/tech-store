// Componente que aparece cuando se quiere buscar una pagina que no existe
import React from "react";
// Componente para añadir la imagen grande
import Hero from "../components/Hero";
// Imagen por defecto cuando no se encuentra la pagina
import defaultBcg from "../images/defaultBcg.jpeg";
// Componente para redireccionar a las paginas
import { Link } from "react-router-dom";

export default function Default() {
  return (
    <>
      {/* Se renderiza el componente Hero, en donde se mandalas props img, title y max, */}
      <Hero img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase"> page not found</h2>

        <Link to="/" className="main-link" style={{ margin: "2rem" }}>
          Return to home
        </Link>
      </Hero>
    </>
  );
}
