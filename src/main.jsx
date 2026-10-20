
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
);
