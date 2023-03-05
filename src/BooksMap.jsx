import React from 'react';
import { Books } from './Data';
import { NavLink, Outlet } from "react-router-dom"



const BooksMap = () => {

  const books = Books

  console.log(books);

  return (
    <>
      <div style={{ display: "flex"}}>
        <div style={{ display: "flex", flexDirection: "column" , borderLeft:"1px solid black" }}>
          {books.map(theBook => (
            <NavLink to={`${theBook.bookNum}`} key={theBook.bookNum}
              style={({isActive})=> {
                return{
                  textDecoration: "none",

                  color: isActive? "red" : "black" ,
                  borderBottom: isActive? "2px solid red" : "none",
                }
              }}
            >
              {theBook.bookName}
            </NavLink>
          ))}
        </div>
        <Outlet/>
      </div>
    </>
  );
}

export default BooksMap;