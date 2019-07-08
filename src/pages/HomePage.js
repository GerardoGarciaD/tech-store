import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
// Se importan los componentes que contienen la informacion para complementar este componente homepage
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

export default function HomePage() {
  return (
    <>
      {/* Se mandan las props al componente Hero */}
      <Hero title="Awesome gadgets" max="true">
        <Link className="main-link" style={{ margin: "2rem" }} to="/products">
          Our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
