import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/* Navbar, sidebar, cart, footer */}

        {/* Aqui es donde se realiza el manejo de las direcciones de las paginas. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          {/* En este componente tambien se va a pasar un id, esto para mostrar solo la informacion de un producto en especifico */}
          <Route path="/product/:id" component={SingleProduct} />
          {/* Si el usuario ingresa una pagina que no existte entonces se muestra la pgaina default */}
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
