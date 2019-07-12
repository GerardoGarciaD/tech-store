import React from "react";

// Se hace import del contexto creado
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value;

        return (
          // Se manda a llamar al componente CartWrapper y se manda una prop, show, que es para hacer los
          // estilos condicionales, (hacer que aparezca o desaparezca el siedcart)
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item">
                    {/* <img src={item.image} width="35" alt="Cart" /> */}
                    <img src={`../${item.image}`} width="35" alt="Cart" />

                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        Amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total: ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link">
                Cart page
              </Link>
            </div>
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

  overflow: scroll;
  padding: 2rem;

  ul {
    padding: 0 !important;
  }

  .cart-item {
    list-style-type: none;
  }
`;
