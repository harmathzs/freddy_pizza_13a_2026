
import { pizzas } from "../data/pizzas.js";
import PizzaCard from "../components/PizzaCard.jsx";
import { useState } from "react";

const filters = ["all", "vegetarian", "spicy"];

export default function Pizzas() {
  const [pickedFilter, setPickedFilter] = useState("all")

  const handleFilterButtonClick = (buttonKey) => {
    // console.log('handleFilterButtonClick buttonKey', buttonKey)
    setPickedFilter(buttonKey)
  }
  
  return (
    <>
      <h1>Pick your pizza</h1>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`chip ${pickedFilter == f ? "active" : ""}`}
            onClick={() => handleFilterButtonClick(f) }
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid">
        {pizzas.filter((p)=>{
          return p.tags.includes(pickedFilter) || pickedFilter=='all'
        }).map((p) => (
          <PizzaCard key={p.id} pizza={p} />
        ))}
      </div>
    </>
  );
}
