import React from "react";
// Se  importa el componene que contiene todos los componentes para esta pagina
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";

export default function CartPage() {
  return (
    <>
      <Hero img={cartBcg} />
      <CartSection />
    </>
  );
}
