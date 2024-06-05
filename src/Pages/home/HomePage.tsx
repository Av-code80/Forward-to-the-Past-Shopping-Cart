import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar";
import MovieList from "../../components/MovieList";
import Cart from "../../components/Cart";
import { CartProvider } from "../../context/CartContext";
  import { ToastContainer} from "react-toastify";
import "./HomePage.scss";
import "../../index.scss";
import "react-toastify/dist/ReactToastify.css";

const HomePage: React.FC = () => {
  return (
    <CartProvider>
      <ToastContainer position="top-left" autoClose={3000} />
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

export default HomePage;
