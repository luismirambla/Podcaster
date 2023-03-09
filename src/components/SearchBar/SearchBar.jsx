import React, { useContext } from "react"
import PodcastsContext from "../../contexts/podcastsContext";
import './SearchBar.css'

const SearchBar = () => {
  const { Podcasts } = useContext(PodcastsContext)

  return (
    <div className="searchbar-container">
      <div className="searchbar-result">
        <div>{Podcasts.length}</div>
      </div>
      <div className="searchbar">
        <input className='search' placeholder="Filter podcasts..." />
      </div>
    </div>
  )
}

export default SearchBar