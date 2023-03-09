import React, { useContext } from "react"
import PodcastsContext from "../../contexts/podcastsContext"
import './PodcastInfo.css'

const PodcastInfo = () => {
  const { PodcastDetails } = useContext(PodcastsContext)

  return (
      <div className="podcast-info">
        <img className="podcast-info-img" src={PodcastDetails[0].artworkUrl600} alt={PodcastDetails.collectionName} />
        <hr />
        <div>
          <h2 className="podcast-info-title">{PodcastDetails[0].collectionName}</h2>
          <p className="podcast-info-author">by {PodcastDetails[0].artistName}</p>
        </div>
        <hr />
        <div>
          <h3 className="podcast-info-description">Description:</h3>
          <p className="podcast-description">Descripción del Podcast</p>
        </div>
      </div>
  )
}

export default PodcastInfo