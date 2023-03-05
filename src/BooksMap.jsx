import React from 'react';
import { Books } from './Data';
import { Link, Outlet } from "react-router-dom"



const BooksMap = () => {

  const books = Books

  console.log(books);

  return (
    <>
      <div style={{ display: "flex"}}>
        <div style={{ display: "flex", flexDirection: "column" , borderLeft:"1px solid black" }}>
          {books.map(theBook => (
            <Link to={`${theBook.bookNum}`} key={theBook.bookNum}>
              {theBook.bookName}
            </Link>
          ))}
        </div>
        <Outlet/>
      </div>
    </>
  );
}

export default BooksMap;