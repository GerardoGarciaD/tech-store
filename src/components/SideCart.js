import React from "react";

// Se hace import del contexto creado
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart } = value;

        return (
          // Se manda a llamar al componente CartWrapper y se manda una prop, show, que es para hacer los
          // estilos condicionales, (hacer que aparezca o desaparezca el siedcart)
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>Cart items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

// Se crea el styled component
const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGray);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);

  /* Se verifica el valor de las props que se mandan cuando se "llama" al componente para el esstilo condicional */
  transform: ${props => (props.show ? "translateX(0)" : "translate(100%)")};

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
