import React from "react";
// Importacion de los iconos a utilizar
import { FaBars, FaCartPlus } from "react-icons/fa";
// Se hace la importacion para poder crear componentes con estilos directamente en el componente
import styled from "styled-components";
// Se importa el ProductConsumer del contexto creado, esto para poder utilizar la informacion del contexto
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        // Se hace destructuring de los metodos y variables del contexto que se quieren utilizar
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="Tech Store Logo" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

// Se crea un componente que va a contener todos los estilos
const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGray);
  border-bottom: 3px solid var(--primaryColor);

  /* Se pueden llamar clases que esten dentro del "styled componnent" */
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  /* Haciendo que este div tenga posicion relativa para que los divs hijos puedan tener posicion absoluta 
  y acomodarlos como queramos */
  .nav-cart {
    position: relative;
  }

  /* Div hijo que se acomoda arriba y en la derecha con la posicion absolute */
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
