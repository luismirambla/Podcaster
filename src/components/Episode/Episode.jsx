import React, { useContext } from "react"
import PodcastsContext from "../../contexts/podcastsContext"
import './Episode.css'

const Episode = () => {
  const { PodcastDetails } = useContext(PodcastsContext)

  return (
    <div className="detail-container">
      <h1 className="detail-title">{PodcastDetails[1].trackName}</h1>
      <p className="detail-description">{PodcastDetails[1].description}</p>
      <audio className="detail-audio" controls>
        <source src={PodcastDetails[1].episodeUrl} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Episode