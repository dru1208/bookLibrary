import React from "react"

import "../styles/InventorySearch.css"

const InventorySearch = ({ query, onQueryUpdate, onSearchTriggered, onViewAll, reserved, flipReserved }) => {

  const onChange = (e) => {
    const newQuery = e.target.value
    onQueryUpdate(newQuery)
  }

  return (
    <div className="search-container">
      <div>Search for your favorite books:</div>
      <div className="search-bar-container">
        <div className="search-bar-subcontainer">
          <input className="search-bar-content" type="text" value={query} onChange={onChange} />
          <label className="search-bar-content" htmlFor="reserved">Reserved:</label>
          <input className="search-bar-content" type="checkbox" checked={reserved} onChange={flipReserved} name="reserved" />
        </div>
        <div className="search-bar-subcontainer">
          <button className="search-bar-content" onClick={onSearchTriggered}>Search</button>
          <button className="search-bar-content" onClick={onViewAll}>View All</button>
        </div>
      </div>
    </div>
  )
}

export default InventorySearch

