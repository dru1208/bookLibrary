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
    <div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{quantityForDisplay(quantity)}</div>
      <button>Reserve</button>
    </div>
  )
}

export default BookListing