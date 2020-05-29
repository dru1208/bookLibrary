import React, { useState, useEffect } from "react"

import useBookLibrary from "../hooks/useBookLibrary"

import BookListings from "./BookListings.jsx"
import PageSelection from "./PageSelection.jsx"

const App = () => {
  const {
    books,
    currentPage,
    totalPages,
    setBooks,
    setCurrentPage,
    setTotalPages
  } = useBookLibrary()

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