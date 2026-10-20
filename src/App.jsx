import { Component } from "react";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Pizzas from "./pages/Pizzas.jsx";
import PizzaDetail from "./pages/PizzaDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

export default class App extends Component {
  render() {
    return (
      <Layout>
        {window.location.pathname == '/' && <Home />}
        {window.location.pathname == '/pizzas' && <Pizzas />}
        {window.location.pathname == '/about' && <About />}
        {window.location.pathname == '/cart' && <Cart />}
      </Layout>
    );
  }
}
