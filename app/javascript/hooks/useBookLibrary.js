import { useState, useEffect } from "react"
import axios from "axios"

const useBookLibrary = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [query, setQuery] = useState("")

  const bookApiCall = (page, query) => {
    axios
      .get(`/books?page=${page}&query=${query}`)
      .then((resp) => {
        const { data } = resp
        setBooks(data.books)
        setTotalPages(data.totalPages)
        setCurrentPage(data.currentPage)
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {
    bookApiCall(currentPage, query)
  }, [])

  const onCurrentPageSelection = (newPageNumber) => {
    bookApiCall(newPageNumber, query)
  }

  const onSearchTriggered = () => {
    bookApiCall(1, query)
  }

  const onViewAll = () => {
    bookApiCall(1, "")
    setQuery("")
  }

  return {
    books,
    currentPage,
    totalPages,
    onCurrentPageSelection,
    query,
    onQueryUpdate: setQuery,
    onSearchTriggered,
    onViewAll
  }
}

export default useBookLibrary