
import { useEffect } from "react";
import { useCart } from "../context/CartContext.jsx";

export default function Layout({children=[]}) {
  const { count } = useCart();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="navbar">
        <a href="/" className="brand">🍕 Freddy's Pizza</a>
        <nav>
          <a href="/" end>Home</a>
          <a href="/pizzas">Pizzas</a>
          <a href="/about">About</a>
          <a href="/cart" className="cart-link">
            Basket {count > 0 && <span className="badge">{count}</span>}
          </a>
        </nav>
      </header>
      <main className="container">
        {children}
      </main>
      <footer className="footer">© 2026 Freddy's Pizza · 12 Dough Street</footer>
    </>
  );
}
