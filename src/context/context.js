import React, { Component } from "react";

// Se hace el import de los links (Array) creados en el archivo linkData.js
import { linkData } from "./linkData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  // Variables que se van a utilizar durante todo el proyecto
  state = {
    sidebarOpen: true,
    cartOpen: false,
    cartItems: 0,
    links: linkData
  };

  //   Funciones que se van a utilizar durante el proyecto
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  //   close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  // Open cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        //   estos son los valores que estaran disponibles en todo el proyecto
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {/* Se pone esta linea de codigo para indicar que el contexto va a abarcar los hijos que esten dentro del context */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
