import React from "react"

import "../styles/PageSelectionButton.css"

const PageSelectionButton = ({ pageNumber, selected, setCurrentPage }) => {
  const className = `page-selection-button ${selected ? "selected" : ""}`
  return (
    <>
      <button
        className={className}
        onClick={() => setCurrentPage(pageNumber)}
      >
        Page {pageNumber}
      </button>
    </>
  )
}

export default PageSelectionButton