
import { pizzas } from "../data/pizzas.js";
import PizzaCard from "../components/PizzaCard.jsx";

const filters = ["all", "vegetarian", "spicy"];

export default function Pizzas() {
  
  return (
    <>
      <h1>Pick your pizza</h1>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`chip ${false ? "active" : ""}`}
            onClick={() => {} }
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid">
        {pizzas.map((p) => (
          <PizzaCard key={p.id} pizza={p} />
        ))}
      </div>
    </>
  );
}
