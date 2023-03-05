export const Books = [

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