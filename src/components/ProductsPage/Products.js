import React from "react";
// se importa el consumer del contexto
import { ProductConsumer } from "../../context";
// Componente para hacer titulos
import Title from "../Title";
import Product from "../Product";

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        // Se hace destructuring de la informacio que se obtiene del contexto
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* Title */}
              <Title title="Our products" center />
              <div className="row py-5">
                {/* Se recorre todo el array que se recibe del contexto (filteredProducts) */}
                {filteredProducts.map(product => {
                  // Por cada elemento que se encuentra, se manda a "llamar" al componente Product
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
