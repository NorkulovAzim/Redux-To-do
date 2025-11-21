import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo />
                <TodoList />
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
