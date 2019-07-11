import React from "react";
// se importa el componente para crear styled components
import styled from "styled-components";
// se importa el componente para navegar entre el sistema
import { Link } from "react-router-dom";

// Se importan los iconos que se van a utilizar
import { FaSearch, FaCartPlus } from "react-icons/fa";

// se importa el contexto
import { ProductConsumer } from "../context";

// Se recibe el parametro (la prop) que se manda desde el otro componente (Featured y Products)
export default function Product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        //   Se hace destructuring de los metodos que se quieren obtener del context
        const { addToCart, setSingleProduct } = value;

        return (
          // Clases de bootstrap para hacer uso de las columnas
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            {/* Se crea un "elemento" card de bootstrap que va a contener el todo el producto, imagen, titulo, precio, etc. */}
            <div className="card">
              <div className="image-container">
                <img
                  // La imagen se obtiene mediante destructuring de la propiedad que recibe el componente Product
                  src={product.image}
                  className="card-img-top p-5"
                  alt="Product"
                  style={{ height: "320px" }}
                />
                {/* Se crea un div que contiene los iconos, esto para poder hacer la posicion absolute */}
                <div className="product-icons">
                  {/* Se crea un link que redirige a un producto en especifico ya que se guarda con el id del producto */}
                  <Link
                    to={`/products/${product.id}`}
                    // Aqui se manda a llamar al metodo del context
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>
                  <FaCartPlus
                    className="icon"
                    // Aqui se manda a llamar al metodo del context
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>

              <div className="card-body d-flex justify-content-between">
                {/* Se muestra la informacion de la prop que se obtiene en el componente */}
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

// Se crea el styled component

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }

  .card:hover {
    box-shadow: 7px 10px 5px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .card-img-top {
    transition: var(--mainTransition);
  }

  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }

  .img-container {
    position: relative;
  }

  .product-icons {
    position: absolute;
    transition: var(--mainTransition);
    /* Colocar los iconos en el centro */
    top: 50%;
    left: 50%;
    /* Con esto los iconos en verdad se ponen en el centro */
    transform: translate(-50%, -50%);
    /* Se pone opacity 0 por que los iconos solo van a aparecer cuando se haga hover sobre el producto */
    opacity: 0;
  }

  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }

  .card:hover .product-icons {
    opacity: 1;
  }

  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
