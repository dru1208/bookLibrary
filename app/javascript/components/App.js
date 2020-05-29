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
    onSearchTriggered
  } = useBookLibrary()

  return (
    <div>
      <h1 className="header">Book Collection</h1>
      <InventorySearch
        query={query}
        onQueryUpdate={onQueryUpdate}
        onSearchTriggered={onSearchTriggered}
      />
      <BookListings books={books} />
      <PageSelection
        totalPages={totalPages}
        currentPage={currentPage}
        onCurrentPageSelection={onCurrentPageSelection}
      />
    </div>
  )
}

export default App