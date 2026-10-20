import { Component } from "react";

import QtyStepper from "./QtyStepper.jsx";

export default class PizzaCard extends Component {
  render() {
    const { pizza } = this.props;

    return (
      <article className="card">
        <a href={`/pizzas/${pizza.id}`} className="card-emoji" aria-label={`${pizza.name} details`}>
          {pizza.emoji}
        </a>
        <h3>{pizza.name}</h3>
        <p className="muted">{pizza.ingredients.join(", ")}</p>
        <div className="tags">
          {pizza.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="card-footer">
          <strong>€{pizza.price.toFixed(2)}</strong>
          <QtyStepper pizza={pizza} />
        </div>
      </article>
    );
  }
}
