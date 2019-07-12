import React from "react";
// Se importan los iconos
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";

// Se hace destructuring de las props que se mandan desde el componente CartList
export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  // Se hace destructuring del objeto cartItem que se recibe como prop
  const { id, title, price, count, total, image } = cartItem;
  return (
    //   Se añade la clase row para poder utilizar el sistema de columnas
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* Se añade la imagen que se obtiene desde el destructuring del cartItem */}
      {/* Image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60px" className="img-fluid" />
      </div>
      {/* End of image */}

      {/* Name */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Product: </span> {title}
      </div>
      {/* End of name */}

      {/* Price */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Price: </span> ${price}
      </div>
      {/* End of Price */}

      {/* Seccion en donde se añaden los iconos para agregar y reducir los items */}
      {/* count controls */}
      <div className="col-10-mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          {/* Se muestra el icono y se manda a llamar al metodo que se obtiene desde el contexto, 
            y como a este metodo se le pasa un parametro se tiene que ejecutar con una arrow function */}
          <FaChevronCircleDown
            onClick={() => decrement(id)}
            className="cart-icon text-primary"
          />
          <span className="text-title text-muted mx-3">{count}</span>
          {/* Se muestra el icono y se manda a llamar al metodo que se obtiene desde el contexto, 
            y como a este metodo se le pasa un parametro se tiene que ejecutar con una arrow function */}
          <FaChevronCircleUp
            onClick={() => increment(id)}
            className="cart-icon text-primary"
          />
        </div>
      </div>
      {/* End of count controls */}

      {/* Remove */}
      <div className="col-10 mx-auto col-lg-2 ">
        {/* Se muestra el icono y se manda a llamar al metodo que se obtiene desde el contexto, 
            y como a este metodo se le pasa un parametro se tiene que ejecutar con una arrow function */}
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      {/* End of Remove */}

      {/* Price */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Total: </span> ${total}
      </div>
      {/* End of Price */}
    </div>
  );
}
