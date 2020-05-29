import React from "react"

const BookListing = ({ book }) => {
  const { title, author, quantity } = book

  const quantityForDisplay = (count) => {
    if (count > 1) {
      return `${count} copies available`
    } else if (count === 1) {
      return `1 copy available`
    } else {
      return "No copies available"
    }
  }

  return (
    <div className="listing-container">
      <div className="listing-title">{title}</div>
      <div className="listing-author">{author}</div>
      <div className="listing-quantity">{quantityForDisplay(quantity)}</div>
      <button className="listing-reserve">Reserve</button>
    </div>
  )
}

export default BookListing