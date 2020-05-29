import React from "react"

import BookListing from "./BookListing.jsx"
import "../styles/BookListings.css"

const BookListings = ({ books }) => {
  return (
    <div className="listings-container">
      {
        books.map((book, index) => {
          return <BookListing key={index} book={book} />
        })
      }
    </div>
  )
}

export default BookListings