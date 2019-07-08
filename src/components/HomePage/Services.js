import React, { Component } from "react";
// Se importa el componente para poder crear styled components
import styled from "styled-components";
// Se importan los iconos
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
  /* En este caso como se va a crear el array que contiene todos los servicios directamente en el componente 
    se utiliza un class based component para poder utilizar o crar un state (estado) */

  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "Free shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, deleniti?"
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, deleniti?"
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured payment",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, deleniti?"
      }
    ]
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        {/* Se crean los div con las clases container y row para poder utilizar el sistema de columnas de bootstrap */}
        <div className="container">
          <div className="row">
            {/* Se hace un recorrido de los elementos del array services que se encuentra en el estado */}
            {this.state.services.map(item => {
              return (
                <div
                  /* Se añaden las clases de bootstrap para acomodar el sistema de columnas dependiendo del 
                tamaño de la pantalla */
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={item.id}
                >
                  {/* Se escriben los datos que estan en el state */}
                  <div className="service-icon">{item.icon}</div>
                  <div className="mt-3 text-capitalize">{item.title}</div>
                  <div className="mt-3">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

// se crea el styled component
const ServicesWrapper = styled.section`
  background: rgba(95, 186, 234, 0.5);
  /* Estas clases y elementos son los que se encuentran dentro del ServiceWrapper al momento de ser "Llamado" */
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }

  p {
    color: var(--darkGray);
  }
`;
