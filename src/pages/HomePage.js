import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* Se mandan las props al componente Hero */}
      <Hero title="Awesome gadgets" max="true">
        <Link to="/products">Our products</Link>
      </Hero>
    </>
  );
}
