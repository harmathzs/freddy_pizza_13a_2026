import { Component } from "react";

import { pizzas } from "../data/pizzas.js";
import PizzaCard from "../components/PizzaCard.jsx";

export default class Home extends Component {
  render() {
    const featured = pizzas.filter((p) => [1, 2, 7].includes(p.id));

    return (
      <>
        <section className="hero">
          <h1>Hand-stretched pizza, baked in 90 seconds.</h1>
          <p>Wood-fired, family-run, and delivered hot since 2009.</p>
          <a href="/pizzas" className="btn btn-large">Order now</a>
        </section>
        <h2>Customer favorites</h2>
        <div className="grid">
          {featured.map((p) => (
            <PizzaCard key={p.id} pizza={p} />
          ))}
        </div>
      </>
    );
  }
}
