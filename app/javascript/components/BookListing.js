import React from "react"

const BookListing = ({ book }) => {
  return (
    <div>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.quantity}</div>
      <button>Reserve</button>
    </div>
  )
}

export default BookListing