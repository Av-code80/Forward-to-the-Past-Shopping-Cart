import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../layout/NavBar";
import { CartProvider } from "../context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieList = React.lazy(() => import("../components/movieList/MovieList"));
const Cart = React.lazy(() => import("../components/cart/Cart"));

/**
 * @description Main application component sets up router & context providers.
 */

const App: React.FC = () => {
  return (
    <CartProvider>
      <ToastContainer position="top-left" autoClose={2000} />
      <Router>
        <main id="main-heading" className="app" aria-labelledby="main-heading">
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </CartProvider>
  );
};

export default App;
