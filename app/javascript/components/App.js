import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get("/books").then((resp) => {
      const booksFromLibrary = resp.data
      setBooks(booksFromLibrary)
    })
  }, [])

  return (
    <div>
      <h1>Book Collection</h1>
    </div>
  )
}

export default App