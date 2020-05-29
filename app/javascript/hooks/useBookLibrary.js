import { useState, useEffect } from "react"
import axios from "axios"

const useBookLibrary = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const bookApiCall = (page) => {
    axios.get(`/books?page=${page}`).then((resp) => {
      const { data } = resp
      setBooks(data.books)
      setTotalPages(data.totalPages)
    })
  }

  useEffect(() => {
    bookApiCall(currentPage)
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