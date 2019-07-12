import React from "react";
import CartItem from "./CartItem";
// Se importa el ProductConsumer del cotnexto
import { ProductConsumer } from "../../context/context";

export default function CartList() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {/* Se llama al prodcut consumer */}
          <ProductConsumer>
            {/* Se hace la funcion para obtener la informacio de contexto */}
            {value => {
              // Se hace destructuring para obtener solo la informacion que se del context
              const { cart, increment, decrement, removeItem } = value;
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    Your cart is empty
                  </h1>
                );
              }

              return (
                <>
                  {/* Se recorre el array cart del context y por cada elemento se manda a llamar al componente cartItem */}
                  {cart.map(item => (
                    //   Se mandan Propiedades al componente cartItem
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      increment={increment}
                      decrement={decrement}
                      removeItem={removeItem}
                    />
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
