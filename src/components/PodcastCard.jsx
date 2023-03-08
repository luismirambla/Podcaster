import React from "react"
import './PodcastCard.css'

const PodcastCard = (props) => {
  const { podcast } = props

  return (
    <button className="podcast-card" onClick={() => console.log('podcast')}>
      <div className="podcast-img-container">
        <img
          className="podcast-img"
          src={podcast["im:image"][2].label}
          alt={'tiny desk concerts'}
        />
      </div>
      <div className="card-body">
        <p className="card-title">{podcast["im:name"].label}</p>
        <p className="card-author">Author: {podcast["im:artist"].label}</p>
      </div>
    </button>
  )
}

export default PodcastCard