import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./index.scss";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <main className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;
