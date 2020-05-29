import React, { useState, useEffect } from "react"
import axios from "axios"

import BookListings from "./BookListings.jsx"
import PageSelection from "./PageSelection.jsx"

const App = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    axios.get(`/books?page=${currentPage}`).then((resp) => {
      const { data } = resp
      setBooks(data.books)
      setTotalPages(data.totalPages)
    })
  }, [])

  return (
    <div>
      <h1>Book Collection</h1>
      <BookListings books={books} />
      <PageSelection
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App