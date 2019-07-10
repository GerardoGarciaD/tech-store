import React, { Component } from "react";

// Se hace el import de los links (Array) creados en el archivo linkData.js
import { linkData } from "./linkData";

// Se hace el import de los iconos para las redes sociales
import { socialData } from "./socialData";

// Se importa la informacion de los items
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  // Variables que se van a utilizar durante todo el proyecto
  state = {
    sidebarOpen: false,
    cartOpen: false,
    // se guarda el array que para los links
    links: linkData,
    // se guarda el array para los iconos de las redes sociales
    socialIcons: socialData,
    cart: [],
    // Variables para poder controlar el cart, los productos, etc.
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true
  };

  // Se crea un metodo, (componentDidMount), que este tipo de componentes se utilizan una vez que se haya terminado
  // de "montar" el componente

  componentDidMount() {
    // Se manda a llamar el metodo en donde se manda como parametro todos los datos de los productos (items)
    this.setProducts(items);
  }

  // Se crea un metodo para obtener los campos del array que contiene toda la informacion de los productos
  // esto para crear un producto con una estructura mas "amigable"
  setProducts = products => {
    // Se recorre todo el array que se recibe como parametro
    let storeProducts = products.map(item => {
      // se hace destructuring para obtener los valores que estan dentro del array
      const { id } = item.sys;

      // Se hace destructuring para obtener el url de la imagen mas facilmente al momento de crear un nuevo producto
      const image = item.fields.image.fields.file.url;

      /* Se crea un nuevo producto que contendrá el id que se obtuvo anteriormente, y se utiliza spread operetaros(...)
      para guardar toda la informacion del objeto item.fields (title,price,company,etc) */
      const product = { id, ...item.fields, image };
      return product;
    });
    // Verificacion que se crean y guardan los productos correctamente
    // console.log(storedProducts);

    // Se encuentran los productos "destacados", se recorre el stored product para encontrar los que tengan el campo featured = true
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    // se cambian los valores  que se encuentran en el estado

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loadig: false
    });
  };

  // obtener la informacion del carrito de manera local
  getStorageCart = () => {
    return [];
  };

  // obtener la informacion de un product de manera local
  getStorageProduct = () => {
    return {};
  };

  // Obtener el total de manera local

  getTotals = () => {};

  // add Totals
  getTotals = () => {};

  // sincronizacion de los items
  syncTotals = () => {};

  // añadir al carrito
  addToCart = id => {
    console.log(`add to cart ${id}`);
  };

  // set single product
  setSingleProduct = id => {
    console.log(`single product ${id}`);
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
        //   estos son los valores y metodos que estaran disponibles en todo el proyecto
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
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
