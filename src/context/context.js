import React, { Component } from "react";

// Se hace el import de los links (Array) creados en el archivo linkData.js
import { linkData } from "./linkData";

// Se hace el import de los iconos para las redes sociales
import { socialData } from "./socialData";

// Se importa la informacion de los items (de manera local)
// import { items } from "./productData";

// se importa el contentful
import { client } from "./contenful";

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
    loading: true,

    // "Variables para filtrar productos"
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false
  };

  // Se crea un metodo, (componentDidMount), que este tipo de componentes se utilizan una vez que se haya terminado
  // de "montar" el componente

  componentDidMount() {
    // Se manda a llamar el metodo en donde se manda como parametro todos los datos de los productos (items)
    // this.setProducts(items);

    // Se manda a llamar al cliente para poder obtener la informacion de contentful
    client
      // se obtienen las entradas de contenful pero solo del modelo deseado
      .getEntries({
        content_type: "techStoreProducts"
      })

      // se manda a llamar a la funcion this.setProducts con los items que se obtienen de la respuesta
      .then(response => this.setProducts(response.items))
      .catch(console.error);
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

    // Obtener el precio mayor en tre los productos
    let maxPrice = Math.max(...storeProducts.map(item => item.price));

    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        // Aqui se manda a llamar una funcion para obtener la informacion desde localStorage
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        max: maxPrice
      },
      () => {
        this.addTotals();
      }
    );
  };

  // obtener la informacion del carrito de manera local
  getStorageCart = () => {
    let cart;
    // Se verifica si es que en verdad hay informacion en el "objeto" cart del localStorage
    if (localStorage.getItem("cart")) {
      // Si es asi, se regresa un JSON con toda la informacion del objeto
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      // Si no hay inofrmacion en localStorage, se regresa un array vacio
      cart = [];
    }

    return cart;
  };

  // obtener la informacion de un product de manera local
  getStorageProduct = () => {
    // Se hace un operador ternario para verificar que exista en el objeto singleProduct en el localStorage
    return localStorage.getItem("singleProduct")
      ? // Si sí existe, entonces se regresa el json que contiene la informacion del producto
        JSON.parse(localStorage.getItem("singleProduct"))
      : {};
    // si no, se regresa un objeto en blanco
  };

  // Metodo para obtener precio total
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;

    // Se recorre el numero de productos que esten en el carrito
    this.state.cart.forEach(item => {
      // Se obtiene el precio total por cada elemento del carrito
      subTotal += item.total;
      // Se obtiene el numero total de elementos en el carrito
      cartItems += item.count;
    });

    // Se hacen la suma total y se añade el impuesto
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    // Finatlmente se regresan estos cuatro valores
    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };

  // add Totals
  addTotals = () => {
    // Se manda a llamar el metodo getTotals y se guardan los resultados del metodo en la variable totals
    const totals = this.getTotals();
    // Se actualiza el estado con los valores que se obtienen desde el otro metodo(getTotals)
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  //Con este metodo se guarda la informacion en el objeto llamado localStorage, esto para que no se pierda la informacion cuando  se añaden
  // productos al carrito al momento de actualizar la pagina
  syncStorage = () => {
    // Se guarda toda la informacion de la variable cart del estado en el objeto localStorage
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  // Metodo para añadir los productos al carrito
  addToCart = id => {
    // Primero crea una variable y  se obtiene todos los productos que esten en el carrito (mediane spread operator)
    let tempCart = [...this.state.cart];
    // Despues se crea otra vairable se obtienen Todos los productos (mediane spread operator)
    let tempProducts = [...this.state.storeProducts];

    // Se crea una variable y se busca si es que en el carrito existe un producto con el id que recibe como parametro el metodo
    let tempItem = tempCart.find(item => item.id === id);

    // Si el producto no esta en el carrito (tempTtem == undefined)
    if (!tempItem) {
      // Se busca el producto que haga match con el id de todos los productos de la tienda y se guarda en la variable tempItem
      tempItem = tempProducts.find(item => item.id === id);
      // Se obtiene el precio de ese producto y se guarda en la variable total
      let total = tempItem.price;
      // Despues se guarda toda la informacion del producto, nombre, precio, etc. (con Spread operator) y tambien se agrega count y total
      let cartItem = { ...tempItem, count: 1, total };
      // Por ultimo se añade el cartItem que se acaba de crear a la ariable tempCart, con spreadOperator
      tempCart = [...tempCart, cartItem];
    }
    // Si el producto ya esta en el carrito
    else {
      // Se suma la cantidad de productos que esten en el carrito
      tempItem.count++;
      // Se hace una multiplicacion con el total de veces que el producto esta en el carrito y el precio del producto
      tempItem.total = tempItem.price * tempItem.count;
      // por ultimo se hace una conversion a numero flotante con solo 2 decimas
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    // Por ultimo se actualiza el estado mediante una funncion
    this.setState(
      () => {
        // Se guarda el valor de tempCart a la variable cart
        return { cart: tempCart };
      },
      // Se hace una callback function , ya que this.setState se hace de forma asincrona
      () => {
        // En la call back function se mandan a llamar a estos 3 metodos
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  // set single product
  setSingleProduct = id => {
    // console.log(id);

    // Se busca el producto que contenga el id que recibe el metodo como parametro
    let product = this.state.storeProducts.find(item => item.id === id);
    // se crea un objeto en local storage para guardar el producto encontrado
    localStorage.setItem("singleProduct", JSON.stringify(product));
    // Se actualiza el estado con el prdocuto que se encontró
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
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

  /* Cart functionality */

  // Increment of the cart item
  increment = id => {
    // Primero se obtiene toda la informacion que este en arrego cart del state
    let tempCart = [...this.state.cart];
    // Despues se busca el item que haga match con el id que obtiene del parametro del metodo con los datos del state
    // y se guarda en la variable cartItem
    const cartItem = tempCart.find(item => item.id === id);
    // console.log(cartItem);

    // se suma en 1 el numero de elementos que esten en el carrito
    cartItem.count++;

    // Despues se obtiene el total multiplicando el numero de elementos por el precio
    cartItem.total = cartItem.count * cartItem.price;

    // Se reduce el numero de decimales a 2
    cartItem.total = parseFloat(cartItem.total.toFixed(2));

    // Se actualiza el estado con la nueva informacion del cartItem
    this.setState(
      () => {
        return {
          // Se actualiza el valor del carrito con el nuevo valor del tempCart mediante spread operator
          cart: [...tempCart]
        };
      },
      /* Se mandan a llamar a los metodos para actualizar los totales y la informacion del local storage 
      como callbackfunctions */
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  // decrement of the cart item
  decrement = id => {
    // Primero se obtiene toda la informacion que este en arrego cart del state
    let tempCart = [...this.state.cart];
    // Despues se busca el item que haga match con el id que obtiene del parametro del metodo con los datos del state
    // y se guarda en la variable cartItem
    const cartItem = tempCart.find(item => item.id === id);
    // console.log(cartItem);

    // se resta en 1 el numero de elementos que esten en el carrito
    cartItem.count--;

    // Si el numero de elementos en el carrito es 0, entonces se manda a llamar el metodo this.removeItem
    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      // Despues se obtiene el total multiplicando el numero de elementos por el precio
      cartItem.total = cartItem.count * cartItem.price;

      // Se reduce el numero de decimales a 2
      cartItem.total = parseFloat(cartItem.total.toFixed(2));

      // Se actualiza el estado con la nueva informacion del cartItem
      this.setState(
        () => {
          return {
            // Se actualiza el valor del carrito con el nuevo valor del tempCart mediante spread operator
            cart: [...tempCart]
          };
        },
        /* Se mandan a llamar a los metodos para actualizar los totales y la informacion del local storage 
      como callbackfunctions */
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };

  // remove of the cart item
  removeItem = id => {
    // Se obtiene toda la informacion del carrito del stado
    let tempCart = [...this.state.cart];
    // Se filtran los elementos que no sean el id para eliminar el elemento(producto) del carrito
    tempCart = tempCart.filter(item => item.id !== id);

    // Se actualiza el estado
    this.setState(
      {
        // Se actualiza el valor del carrito con el nuevo valor del tempCart mediante spread operator
        cart: [...tempCart]
      },
      // Se mandan a llamar los metodo para acutalizar los totales y el localStorage en una call back function
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  // Vaciar el carrito
  clearCart = () => {
    this.setState(
      {
        // Se pone el array en blanco
        cart: []
      },
      () => {
        // Se mandan a llamar los metodo para acutalizar los totales y el localStorage en una call back function
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  // Funciones para el filtrado de los productos

  // en esta funcion se recibe el evento (cuando se hace click en los inputs)
  handleChange = event => {
    // se obtiene el nombre del input al que se hizo click, se escribió informacion, etc
    const name = event.target.name;
    // Se obtiene el valor del input
    const value =
      // se verifica si el tipo de input es un checkbox
      event.target.type === "checkbox"
        ? event.target.checked
        : // si no es un checkbox se obtiene su valor de forma "normal"
          event.target.value;

    // se cambian los valores que estan en el estado
    this.setState(
      {
        // se actualiza la "variable" del estado con la variable que se obtiene del evento, es por eso
        // que se los inputs deben de tener el mismo nombre que las "variables" del estado
        [name]: value
      },
      // Se manda a llamar a la funcion this.sortData en la callback function
      this.sortData
    );

    console.log(`Name:  ${name} value: ${value}`);
  };

  sortData = () => {
    // Primero se obtienen todos los productoss y variables que se utilizan para filtrar productos
    const { storeProducts, price, company, shipping, search } = this.state;

    // se convierte a entero el valor price
    let tempPrice = parseInt(price);

    // Se guarda toda la informacion del array storeProducts en tempProducts con spread operator
    let tempProducts = [...storeProducts];

    // se empieza ocn el filtrado de los productos con la informacion que se cambio de las variables del estado en
    // el metodo handleChange

    // Filtrado por compañia
    if (company !== "all") {
      tempProducts = tempProducts.filter(item => item.company === company);
    }

    // Filtrado por precio
    tempProducts = tempProducts.filter(item => item.price <= tempPrice);

    // filtrado por envio
    if (shipping === true) {
      tempProducts = tempProducts.filter(item => item.freeShipping === true);
    }

    // verificacion por nombre
    if (search.length > 0) {
      tempProducts = tempProducts.filter(item => {
        // primero se transofrma lo que busca el usuario en el input a minusculas
        let tempSearch = search.toLowerCase();
        // despues se verifica si el titulo del item hace match con la busqueda del usuario
        let tempTittle = item.title.toLowerCase().slice(0, search.length);
        // si la busqueda es exitosa se regresa el producto
        if (tempSearch === tempTittle) {
          return item;
        }
      });
    }

    this.setState({
      filteredProducts: tempProducts
    });
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
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
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
