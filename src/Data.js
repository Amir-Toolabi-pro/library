export let Books = [

  {
    bookName: "فیزیک",
    bookNum: 10,
    writer: "دالتون",
  },
  {
    bookName: "ریاضی",
    bookNum: 11,
    writer: "ابوریحان سطحی",
  },
  {
    bookName: "فارسی",
    bookNum: 12,
    writer: "شاملو",
  },
  {
    bookName: "زیست",
    bookNum: 13,
    writer: "عباس قانع",
  },

]

export const getBook =(id) => {
  return Books.find(theBook => theBook.bookNum === id )
}

export const deleteBook = (id) => {
  Books = Books.filter(theBook => theBook.bookNum !== id )
}