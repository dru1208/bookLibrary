import { useState, useEffect } from "react"
import axios from "axios"

const useBookLibrary = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const bookApiCall = (page, cb) => {
    axios.get(`/books?page=${page}`).then((resp) => {
      const { data } = resp
      setBooks(data.books)
      setTotalPages(data.totalPages)
      cb()
    })
  }

  useEffect(() => {
    bookApiCall(currentPage, () => {})
  }, [])

  const onCurrentPageSelection = (newPageNumber) => {
    const cb = () => setCurrentPage(newPageNumber)
    bookApiCall(newPageNumber, cb)
  }

  return {
    books,
    currentPage,
    totalPages,
    onCurrentPageSelection,
  }
}

export default useBookLibrary