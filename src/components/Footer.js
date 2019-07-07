import React from "react";
// Componente para crear styled components
import styled from "styled-components";
// Se obtiene el contexto
import { ProductConsumer } from "../context";

export default function Footer() {
  return (
    // Se obtiene la informacion de contexto mediante el ProductConsumer
    <ProductConsumer>
      {/* Funcion para poder utilizar el context */}
      {value => {
        return (
          <FooterWrapper>
            {/* Se utiliza container para poder utilizar row y las columnas de bootstrap */}
            <div className="container py-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p className="text-capitalize m-0">
                    Copyright &copy; tech store {new Date().getFullYear()}. all
                    rights reserved{" "}
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {/* Se recorren todos los elementos del array socialIcons que esta localizado en el context */}
                  {value.socialIcons.map(item => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

// Styled component que se crea y se manda a llamar en este mismo componente
const FooterWrapper = styled.footer`
  background: var(--darkGray);
  color: var(--mainWhite);
  /* Esta clase esta almacenada en el array socialIcons del contexto y como esta adentro del 
  FooterWrapper, se puede tener acceso a esta */
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
