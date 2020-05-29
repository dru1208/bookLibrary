import { useState, useEffect } from "react"
import axios from "axios"

const useBookLibrary = () => {
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

  return {
    books,
    currentPage,
    totalPages,
    setBooks,
    setCurrentPage,
    setTotalPages
  }
}

export default useBookLibrary