import { useState, useEffect } from "react"
import axios from "axios"

const useBookLibrary = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [query, setQuery] = useState("")

  const bookApiCall = (page, cb) => {
    axios
      .get(`/books?page=${page}`)
      .then((resp) => {
        const { data } = resp
        setBooks(data.books)
        setTotalPages(data.totalPages)
        cb()
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {
    bookApiCall(currentPage, () => {})
  }, [])

  const onCurrentPageSelection = (newPageNumber) => {
    const cb = () => setCurrentPage(newPageNumber)
    bookApiCall(newPageNumber, cb)
  }

  const onSearchTriggered = () => {
    console.log("this is the search query", query)
    setQuery("")
  }

  return {
    books,
    currentPage,
    totalPages,
    onCurrentPageSelection,
    query,
    onQueryUpdate: setQuery,
    onSearchTriggered
  }
}

export default useBookLibrary