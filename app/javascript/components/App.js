import React, { useState, useEffect } from "react"

import useBookLibrary from "../hooks/useBookLibrary"

import "../styles/App.css"

import InventorySearch from "./InventorySearch.jsx"
import BookListings from "./BookListings.jsx"
import PageSelection from "./PageSelection.jsx"

const App = () => {
  const {
    books,
    totalPages,
    currentPage,
    onCurrentPageSelection,
    query,
    onQueryUpdate,
    onSearchTriggered,
    onViewAll,
    reserved,
    flipReserved,
    reserveBookApiCall
  } = useBookLibrary()

  return (
    <div>
      <h1 className="header">Book Collection</h1>
      <InventorySearch
        query={query}
        onQueryUpdate={onQueryUpdate}
        onSearchTriggered={onSearchTriggered}
        onViewAll={onViewAll}
        reserved={reserved}
        flipReserved={flipReserved}
      />
      <BookListings
        books={books}
        reserveBookApiCall={reserveBookApiCall}
      />
      <PageSelection
        totalPages={totalPages}
        currentPage={currentPage}
        onCurrentPageSelection={onCurrentPageSelection}
      />
    </div>
  )
}

export default App