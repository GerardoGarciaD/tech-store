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

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/* Los componentes que estan fuera del switch, se van a mostrar en todas las paginas  */}
        {/* Navbar, sidebar, cart, footer */}
        <Navbar />
        <SideCart />
        <Sidebar />

        {/* Aqui es donde se realiza el manejo de las direcciones de las paginas. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          {/* En este componente tambien se va a pasar un id, esto para mostrar solo la informacion de un producto en especifico */}
          <Route path="/products/:id" component={SingleProduct} />
          {/* Si el usuario ingresa una pagina que no existte entonces se muestra la pgaina default */}
          <Route component={Default} />
        </Switch>

        <Footer />
      </>
    );
  }
}

export default App;
