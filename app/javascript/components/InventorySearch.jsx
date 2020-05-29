import React from "react"

import "../styles/InventorySearch.css"

const InventorySearch = ({ query, onQueryUpdate, onSearchTriggered }) => {
  return (
    <div className="search-container">
      <div>Search for your favorite books:</div>
      <div className="search-bar-container">
        <input className="search-bar-content" type="text" value={query} onChange={onQueryUpdate} />
        <button className="search-bar-content" onClick={onSearchTriggered}>Search</button>
      </div>
    </div>
  )
}

export default InventorySearch

        // <input type="checkbox" checked={reserved} onClick={changeReserved} />