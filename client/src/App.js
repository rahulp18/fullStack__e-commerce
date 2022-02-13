import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/products/:category" element={<ProductList />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
