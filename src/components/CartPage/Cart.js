import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <section className="py-5">
      {/*  Title*/}

      <div className="container">
        <Title title="Your cart items" center />
      </div>

      {/* Componente para mostrar los "Headers" de la "tabla" de los elementos del carrito */}
      {/* Cart Columns */}
      <CartColumns />

      {/* Componente  que muestra los elementos que estan en el carrito  */}
      {/* Cart list */}
      <CartList />

      {/* Componente que muestra los totales del carrito */}
      {/* Cart totals */}
      <CartTotals />
    </section>
  );
}
