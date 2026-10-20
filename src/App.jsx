import { Component } from "react";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Pizzas from "./pages/Pizzas.jsx";
import PizzaDetail from "./pages/PizzaDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pizzas" element={<Pizzas />} />
          <Route path="pizzas/:id" element={<PizzaDetail />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}
