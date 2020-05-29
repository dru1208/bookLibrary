import { useState, useEffect } from "react"
import axios from "axios"

const useBookLibrary = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [query, setQuery] = useState("")
  const [reserved, setReserved] = useState(false)

  const bookApiCall = (page, query) => {
    axios
      .get(`/books?page=${page}&query=${query}&reserved=${reserved}`)
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

  const flipReserved = () => {
    setReserved(prev => !prev)
  }

  return {
    books,
    currentPage,
    totalPages,
    onCurrentPageSelection,
    query,
    onQueryUpdate: setQuery,
    onSearchTriggered,
    onViewAll,
    reserved,
    flipReserved
  }
}

export default useBookLibrary