import React from "react";
// Se importa el componente que muestra la informacion de About
import Info from "../components/AboutPage/Info";
// Se importa el componente Hero, el que se encarga de mostrar las imagenes en tamaño grande
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
import Title from "../components/Title";
export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg} />
      {/* Se manda a llamar el componente info, que es que contiene toda la informacion de AboutUS */}
      <Info />
    </>
  );
}
