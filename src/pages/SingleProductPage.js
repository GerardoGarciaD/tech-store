import React from "react";
// Componente de react-router para navegar entre las paginas
import { Link } from "react-router-dom";
// Imagen para el Hero
import singleProductImg from "../images/singleProductBcg.jpeg";
// ProductConsumer del contexto
import { ProductConsumer } from "../context";
// Componente para la imagen grande y el titulo
import Hero from "../components/Hero";

export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductImg} title="Single Product" />
      <ProductConsumer>
        {/* Arro function para obtener la informacion del context */}
        {value => {
          // Se hace destructuring para obtener solo la informacion que deseemos del context
          const { singleProduct, addToCart, loading } = value;

          // verificacion de la variable loading, en donde se muestra un contenido mientras se carga el componente
          if (loading) {
            console.log("Hello from loading");
            return <h1>Product Loading</h1>;
          }
          // Se hace destructuring del objeto singleProduct que se recibe del contexto
          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;

          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`}
                      // src={image}
                      alt="Single Product"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">Model: {title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      company: {company}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4">
                      price: {price}
                    </h5>
                    <p className="text-capitalize text-titl mt-4">
                      Some info about the product: {company}
                    </p>
                    <p>{description}</p>

                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: ".75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      Add to cart
                    </button>

                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: ".75rem" }}
                    >
                      Back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
