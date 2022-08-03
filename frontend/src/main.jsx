import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Book from "./routes/book"
import AddBook from "./routes/addBook/addBook";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="book/:bookId" element={<Book />} />
      <Route path="book/addBook" element={<AddBook />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
