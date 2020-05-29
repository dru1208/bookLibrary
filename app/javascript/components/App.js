import React, { useState, useEffect } from "react"
import axios from "axios"

import BookListing from "./BookListing"

const App = () => {
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    axios.get(`/books?page=${page}`).then((resp) => {
      const { data } = resp
      setBooks(data.books)
      setTotalPages(data.totalPages)
    })
  }, [])

  return (
    <div>
      <h1>Book Collection</h1>
      {
        books.map((book, index) => {
          return <BookListing key={index} book={book} />
        })
      }
    </div>
  )
}

export default App