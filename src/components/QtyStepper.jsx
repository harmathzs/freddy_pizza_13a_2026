import { useCart } from "../context/CartContext.jsx";

export default function QtyStepper({ pizza }) {
  const { items, add, decrease } = useCart();
  const qty = items.find((i) => i.id === pizza.id)?.qty ?? 0;

  return (
    <div className="qty">
      <span aria-hidden="true">🛒</span>
      <button onClick={() => decrease(pizza.id)} disabled={qty === 0} aria-label={`Remove one ${pizza.name}`}>−</button>
      <span className="qty-count" aria-live="polite">{qty}</span>
      <button onClick={() => add(pizza)} aria-label={`Add one ${pizza.name}`}>+</button>
    </div>
  );
}
