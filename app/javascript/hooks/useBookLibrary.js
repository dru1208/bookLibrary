import { useState, useEffect } from "react"
import axios from "axios"

const useBookLibrary = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [query, setQuery] = useState("")
  const [reserved, setReserved] = useState(false)

  const bookApiCall = (page, query, reserved) => {
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
    bookApiCall(currentPage, query, reserved)
  }, [])

  const onCurrentPageSelection = (newPageNumber) => {
    bookApiCall(newPageNumber, query, reserved)
  }

  const onSearchTriggered = () => {
    bookApiCall(1, query, reserved)
  }

  const onViewAll = () => {
    bookApiCall(1, "", false)
    setQuery("")
    flipReserved()
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