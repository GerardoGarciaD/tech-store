import React from "react";

// se importa el componente para obtener los productos
import product from "../Product";
// se importa el componente para poder hacer links para navegar entre las paginas
import { link } from "react-router-dom";
// se importa el componente para crear titulos
import Title from "../Title";

// Se importa el contexto que contiene toda la informacion y los metodos
import { ProductConsumer } from "../../context";
import Product from "../Product";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Se llama el componente Title y se mandan los parametros para el texto del titulo (title) y si va a estar centrado (center) */}
        <Title title="featured products" center="true" />

        {/* Productos */}
        <div className="row">
          <ProductConsumer>
            {/* Funcion para obtener la informacion del context */}

            {value => {
              // Se hace desctructuring de la informacion que se quiere obtener del context
              const { featuredProducts } = value;

              // Se recorre el objeto o array que se obtiene del context y se manda a llamar al componente Product, por cada elemento que se encuentra
              return featuredProducts.map(product => (
                // Se manda a llamar al componente product y se manda los parametros key y product, que es el que contiene toda la informacion
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}
