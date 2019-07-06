import React from "react";
// Se hace el import para crear styled components
import styled from "styled-components";
// Se hace el import de la imagen por defecto en caso de que no se encuentre ninguna pagina
import mainBcg from "../images/mainBcg.jpeg";

// Se obtienen las props que se mandan a este componente, todas las props, a excepcion del children, se
// mandan directamente este componente, pero children, se refiere a todo el contenido que este escrito dentro
// de la llamada del componente
export default function Hero({ img, title, max, children }) {
  return (
    //   Se manda a llamar al componente HeroWrapper, y se le manda la propiedad max, que sirve para los estilos condicionales
    // asi como tambien la imagen que se va a mostrar
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Se verifica si existe la prop max para hacer los estilos condicionales */
  min-height: ${props => (props.max ? "calc(100vh - 60px)" : "60vh")};
  color: var(--mainWhite);

  /* Se pone de fondo la imagen que se pasa como parametro al styled component */
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) center/cover no-repeat;

  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

// Creacion de valores por defecto en caso de no encontrarse una imagen o algo por el estilo

Hero.defaultProps = {
  img: mainBcg
};
