import React from "react"

import "../styles/InventorySearch.css"

const InventorySearch = ({ query, onQueryUpdate, onSearchTriggered }) => {

  const onChange = (e) => {
    const newQuery = e.target.value
    onQueryUpdate(newQuery)
  }

  return (
    <div className="search-container">
      <div>Search for your favorite books:</div>
      <div className="search-bar-container">
        <input className="search-bar-content" type="text" value={query} onChange={onChange} />
        <button className="search-bar-content" onClick={onSearchTriggered}>Search</button>
      </div>
    </div>
  )
}

export default InventorySearch

        // <input type="checkbox" checked={reserved} onClick={changeReserved} />