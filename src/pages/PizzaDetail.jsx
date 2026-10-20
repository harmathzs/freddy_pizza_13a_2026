import { Link, useParams } from "react-router-dom";
import { pizzas } from "../data/pizzas.js";
import QtyStepper from "../components/QtyStepper.jsx";
import NotFound from "./NotFound.jsx";

export default function PizzaDetail() {
  const { id } = useParams();
  const pizza = pizzas.find((p) => p.id === Number(id));

  if (!pizza) return <NotFound />;

  return (
    <section className="detail">
      <Link to="/pizzas">← Back to pizzas</Link>
      <div className="detail-emoji">{pizza.emoji}</div>
      <h1>{pizza.name}</h1>
      <p>{pizza.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {pizza.ingredients.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p><strong>€{pizza.price.toFixed(2)}</strong></p>
      <QtyStepper pizza={pizza} />
    </section>
  );
}
