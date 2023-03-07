import React from "react"
import './SearchBar.css'

const SearchBar = () => {

  return (
    <div className="searchbar-container">
      <div className="searchbar-result">
        <div>100</div>
      </div>
      <div className="searchbar">
        <input placeholder="Filter podcasts..." />
      </div>
    </div>
  )
}

export default SearchBar