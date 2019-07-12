import React from "react";
// Se importa el product consummer del contexto
import { ProductConsumer } from "../../context";

export default function CartTotals() {
  return (
    <div className="container">
      <div className="row">
        {/* Se "llama el ProductConsumer del contexto" */}
        <ProductConsumer>
          {// Se hace la funcion para poder obtener la informacion del contexto
          value => {
            // Se hace destructuring de la informacion que se quiere obtener del contexto
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;

            return (
              <div className="col text-center text-title my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  Clear cart
                </button>

                <h3>Subtotal: ${cartSubTotal}</h3>
                <h3>Tax: ${cartTax}</h3>
                <h3>Total: ${cartTotal}</h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
