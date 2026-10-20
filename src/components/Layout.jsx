
import { useEffect } from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout({children=[]}) {
  const { count } = useCart();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="brand">🍕 Freddy's Pizza</NavLink>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/pizzas">Pizzas</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cart" className="cart-link">
            Basket {count > 0 && <span className="badge">{count}</span>}
          </NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">© 2026 Freddy's Pizza · 12 Dough Street</footer>
    </>
  );
}
