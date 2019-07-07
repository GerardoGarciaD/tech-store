import React from "react";
// Componente para imagen grande
import Hero from "../components/Hero";
// Import de la imagen a mostrar
import contactImg from "../images/contactBcg.jpeg";
// Se importa el componente que contiene toda la informacion para el componente ContactPage
import Contact from "../components/ContactPage/Contact";

export default function ContactPage() {
  return (
    <>
      {/* Se manda a llamar el componente Hero en donde se manda como prop la imagen a ser mostrada */}
      <Hero img={contactImg} />
      {/* Se manda a llamar el componente que contiene la informacion del componente contacto */}
      <Contact> </Contact>
    </>
  );
}
