import React from 'react';
import { Books } from './Data';
import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom"



const BooksMap = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const books = Books

  console.log(books);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid black" }}>
          
          <input type="text"
            placeholder="جستجوی کتاب"
            value={searchParams.get("filter" || "")}
            onChange={
              event => {
                let filter = event.target.value;
                console.log(filter);
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({})
                }
                console.log(location);
              }
            }
          />

          {
            books.filter(theBook => {
              let filter = searchParams.get("filter");
              if (!filter) {
                return true
              }
              let name = theBook.bookName.toLocaleLowerCase()
              return name.startsWith(filter.toLocaleLowerCase())
            })
              .map(theBook => (
                <NavLink to={`${theBook.bookNum}${location.search}`} key={theBook.bookNum}
                  style={({ isActive }) => {
                    return {
                      textDecoration: "none",

                      color: isActive ? "red" : "black",
                      borderBottom: isActive ? "2px solid red" : "none",
                    }
                  }}
                >
                  {theBook.bookName}
                </NavLink>
              ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default BooksMap;