import React from "react";
// se importa el consumer del contexto
import { ProductConsumer } from "../../context";
// Componente para hacer titulos
import Title from "../Title";
import Product from "../Product";

// se importa el componente que filtra los productos
import ProductFilter from "./ProductFilter";

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

              {/* Se manda a llamar el comopnente para filtrar los productos */}
              <ProductFilter />
              {/* Total Count */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products :{filteredProducts.length}
                  </h6>
                </div>
              </div>

              <div className="row py-5">
                {/* Se hace un operador ternario en donde se verifica si el numero de productos filtrados es igual a 0 */}
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    Sorry no items match your search
                  </div>
                ) : (
                  // Se recorre todo el array que se recibe del contexto (filteredProducts)
                  filteredProducts.map(product => {
                    // Por cada elemento que se encuentra, se manda a "llamar" al componente Product
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
