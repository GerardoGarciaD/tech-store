import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// importacion para el reactRouter
import { BrowserRouter as Router } from "react-router-dom";

import { ProductProvider } from "./context";

ReactDOM.render(
  // Envolviendo toda la aplicacion en el contexto
  <ProductProvider>
    {/*"Envolviendo" toda la aplicacion en el router */}
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
