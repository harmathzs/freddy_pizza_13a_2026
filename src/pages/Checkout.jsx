import { useState } from "react";

import { useCart } from "../context/CartContext.jsx";

export default function Checkout() {
  const { items, total, clear } = useCart();
  const [order, setOrder] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setOrder({ name: data.name, total, number: Math.floor(1000 + Math.random() * 9000) });
    clear();
  }

  if (order) {
    return (
      <section className="center">
        <h1>Thanks, {order.name}!</h1>
        <p>Order #{order.number} (€{order.total.toFixed(2)}) is in the oven.</p>
        <a href="/" className="btn">Back to home</a>
      </section>
    );
  }

  if (items.length === 0) location.href = "/pizzas";

  return (
    <>
      <h1>Checkout</h1>
      <div className="checkout">
        <form onSubmit={handleSubmit} className="form">
          <label>Name <input name="name" required /></label>
          <label>Phone <input name="phone" type="tel" required /></label>
          <label>Address <input name="address" required /></label>
          <label>
            Payment
            <select name="payment" defaultValue="card">
              <option value="card">Card on delivery</option>
              <option value="cash">Cash</option>
            </select>
          </label>
          <button className="btn btn-large" type="submit">Place order · €{total.toFixed(2)}</button>
        </form>
        <aside className="summary">
          <h3>Summary</h3>
          <ul>
            {items.map((i) => (
              <li key={i.id}>{i.qty} × {i.name}<span>€{(i.qty * i.price).toFixed(2)}</span></li>
            ))}
          </ul>
          <p><strong>Total €{total.toFixed(2)}</strong></p>
          <a href="/cart">Edit basket</a>
        </aside>
      </div>
    </>
  );
}
