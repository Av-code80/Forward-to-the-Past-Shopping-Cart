import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../layout/NavBar";
import MovieList from "../components/movieList/MovieList";
import Cart from "../components/cart/Cart";
import { CartProvider } from "../context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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

export default App;
