import React from "react"

import "../styles/PageSelectionButton.css"

const PageSelectionButton = ({ pageNumber, selected, onCurrentPageSelection }) => {
  const className = `page-selection-button ${selected ? "selected" : ""}`
  return (
    <>
      <button
        className={className}
        onClick={() => onCurrentPageSelection(pageNumber)}
      >
        Page {pageNumber}
      </button>
    </>
  )
}

export default PageSelectionButton