import React from "react";
import BooksMap from "./BooksMap";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Book from "./Book";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/books" element={<BooksMap />}>
          <Route index element={
            <div>
              کتاب نورد نطر رو انتخاب کنید
            </div>
          } />
          <Route path=":bookId" element={<Book />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={
          <p>
            گشتم نبود نگرد نیس
          </p>
        } />
      </Routes>
    </>
  );
};

export default App;
