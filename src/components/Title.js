// Componente para mostrar un titulo o un encabezado en los demas componentes
import React from "react";
// Import del componente para poder crear styled components
import styled from "styled-components";

// Se hace destructuring de las props que le son mandadas a este componente (title, center)
export default function Title({ title, center }) {
  return (
    /* Se añade la clase row para poder utilizar el sitema de columnas de Bootstrap, asi como tambien 
      se manda la prop center, para realizar estilos condicionales en el styled component */
    <TitleWrapper className="row" center={center}>
      <div className="col">
        {/* Se muestra el titulo que se recibe de las props */}
        <h2 className="text-title">{title}</h2>
        <div className="title-underline" />
      </div>
    </TitleWrapper>
  );
}

// Styled component
const TitleWrapper = styled.div`
  /* Se verifica si es que se recibe o no la propiedad center (desde el componente Title) para el acomodo del texto,  */
  text-align: ${props => (props.center ? "center" : "left")};

  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    /* Se verifica si es que se recibe o no la propiedad margin (desde el componente Title) para el acomodo de la linea inferior */
    margin: ${props => (props.center ? "0 auto" : "0")};
  }
`;
