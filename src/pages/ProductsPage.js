import React from "react";
// Componente para mostrar todos los productos
import Products from "../components/ProductsPage/Products";
// Componente para hacer la imagen grande
import Hero from "../components/Hero";
// Imagen para el componente Hero
import productsBcg from "../images/productsBcg.jpeg";

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}
