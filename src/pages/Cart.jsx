import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { items, total, add, decrease, remove, clear } = useCart();

  if (items.length === 0) {
    return (
      <section className="center">
        <h1>Your basket is empty</h1>
        <Link to="/pizzas" className="btn">Browse the pizzas</Link>
      </section>
    );
  }

  return (
    <>
      <h1>Your basket</h1>
      <ul className="cart-list">
        {items.map((i) => (
          <li key={i.id} className="cart-row">
            <span className="cart-name">{i.emoji} {i.name}</span>
            <span className="qty">
              <button onClick={() => decrease(i.id)} aria-label="Decrease">−</button>
              {i.qty}
              <button onClick={() => add(i)} aria-label="Increase">+</button>
            </span>
            <span className="cart-price">€{(i.price * i.qty).toFixed(2)}</span>
            <button className="link-btn" onClick={() => remove(i.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <button className="link-btn" onClick={clear}>Empty basket</button>
        <strong>Total: €{total.toFixed(2)}</strong>
        <Link to="/checkout" className="btn">Checkout</Link>
      </div>
    </>
  );
}
