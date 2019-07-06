import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Se hace import del contexto creado
import { ProductConsumer } from "../context";
export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        // Se hace desctructuring de los valores que se pasan del contexto (props)
        const { links, sidebarOpen, handleSidebar } = value;

        return (
          // Aqui se manda una prop al styled component para poder hacer estilos condicionales
          // en donde la prop se iguala con el valor de la variable sidebarOpen del context
          <SideWrapper show={sidebarOpen}>
            <ul>
              {/* Se hace un recorrido por cada elemento de la lista que se obtiene del context */}
              {links.map(link => {
                return (
                  <li>
                    {/* Se utiliza Link, que es parte de react router, para redireccionar a las paginas */}
                    <Link
                      // aqui se asigna la direccion a la pagina de cada elemento de la lista
                      to={link.path}
                      className="sidebar-link"
                      // Se le asigna el metodo que sirve para cambiar el valor de la variable sidebarOpen del context
                      onClick={handleSidebar}
                    >
                      {/* Aqui se muestra el nombre de la direccion (Home, Products, etc). */}
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

// Este es el styled component que se crea, para añadir estilos directamente sin necesidad de css
const SideWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGray);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);

  /* Aqui se hace el estilo condicional dependiendo del valor de la prop que se manda true o false (show) */
  transform: ${props => (props.show ? "translateX(0)" : "translate(-100%)")};

  ul {
    list-style: none;
    padding: 0 !important;
  }

  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }

  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
