import React from 'react';
import { useParams , useNavigate , useLocation } from 'react-router-dom';
import { deleteBook, getBook } from './Data';


const Book = () => {


  const params = useParams();
  const navigate = useNavigate()
  const location = useLocation()
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

  if (theBook) {
    return (
      <>
        <p>
          نام کتاب : {theBook.bookName}
        </p>
        <button onClick={ ()=>{deleteBook(theBook.bookNum); navigate(`/books${location.search}`)}} >حذف مخاطب</button>
      </>
    );
  }else{
    return (
      <>
        <p>
          کتاب با شناسه {id} یافت نشد
        </p>
      </>
    );
  }

}

export default Book;