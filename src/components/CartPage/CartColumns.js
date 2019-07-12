// Componente que tiene los "Encabezados " en la seccion del carrito
import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* Single Columns */}
        <div className=" col-lg-2">
          <p className="text-uppercase">Image</p>
        </div>
        {/* End of single column */}

        {/* Single Columns */}
        <div className=" col-lg-2">
          <p className="text-uppercase">Name</p>
        </div>
        {/* End of single column */}

        {/* Single Columns */}
        <div className=" col-lg-2">
          <p className="text-uppercase">Price</p>
        </div>
        {/* End of single column */}

        {/* Single Columns */}
        <div className=" col-lg-2">
          <p className="text-uppercase">Quantity</p>
        </div>
        {/* End of single column */}

        {/* Single Columns */}
        <div className=" col-lg-2">
          <p className="text-uppercase">Remove</p>
        </div>
        {/* End of single column */}

        {/* Single Columns */}
        <div className=" col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
        {/* End of single column */}
      </div>
    </div>
  );
}
