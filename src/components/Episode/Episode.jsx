import React, { useContext } from "react"
import PodcastsContext from "../../contexts/podcastsContext"
import './Episode.css'

const Episode = (props) => {
  const { PodcastDetails, loading } = useContext(PodcastsContext)
  const { episodeId } = props

  const episodeFound = PodcastDetails.find(episode => `${episode.trackId}` === episodeId)

  return (
    <div className="detail-container">
      {(!loading && episodeFound) &&
        <>
          <h1 className="detail-title">{episodeFound.trackName}</h1>
          <p className="detail-description">{episodeFound.description}</p>
          <hr />
          <audio className="detail-audio" controls>
            <source src={episodeFound.episodeUrl} type="audio/mpeg" />
          </audio>
        </>
      }
    </div>
  )
}

export default Episode