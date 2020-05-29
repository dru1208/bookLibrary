import React from "react"

import PageSelectionButton from "./PageSelectionButton.jsx"

import "../styles/PageSelection.css"

const PageSelection = ({ totalPages, currentPage, setCurrentPage }) => {
  const range = [...Array(totalPages).keys()]
  return (
    <div className="page-selection-container">
      {
        range.map((rangeIndex, index) => {
          const pageNumber = rangeIndex + 1
          const selected = pageNumber === currentPage
          return (
            <PageSelectionButton
              key={index}
              pageNumber={pageNumber}
              setCurrentPage={setCurrentPage}
              selected={selected}
            />
          )
        })
      }
    </div>
  )
}

export default PageSelection