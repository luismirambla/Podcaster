import React, { useContext, useState } from "react"
import PodcastsContext from "../../contexts/podcastsContext"
import './SearchBar.css'

const SearchBar = () => {
  const localStoragePodcasts = JSON.parse(localStorage.getItem('podcasts'))
  const { Podcasts, setPodcastsData } = useContext(PodcastsContext)
  const [search, setSearch] = useState('')

  const handleSearch = ((e) => {
    setSearch(e.target.value)
    
    const podcastsSearch = localStoragePodcasts.filter(podcast => 
      podcast.title.label.toLowerCase().includes(e.target.value.toLowerCase())
    )

    e.target.value === '' ? setPodcastsData(localStoragePodcasts) : setPodcastsData(podcastsSearch)
  }) 

  return (
    <div className="searchbar-container">
      <div className="searchbar-result">
        <div>{Podcasts.length}</div>
      </div>
      <div className="searchbar">
        <input className='search' type='text' value={search} placeholder="Filter podcasts..." onChange={handleSearch} />
      </div>
    </div>
  )
}

export default SearchBar