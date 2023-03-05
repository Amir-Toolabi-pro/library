import React from 'react';
import { useParams } from 'react-router-dom';
import { Books, getBook } from './Data';


const Book = () => {

  
  const params = useParams();
  const id = Number(params.bookId)
  console.log(id);
  
  const theBook = getBook(id)
  console.log(theBook);

  
  // const books = Books;
  // const findBook = () => {
  //   const myBook = books.find(theBook => theBook.bookNum === id);
  //   return myBook
  // }
  // console.log(findBook);

  return (
    <>
      <p>
        نام کتاب : {theBook.bookName}
      </p>
    </>
  );
}

export default Book;