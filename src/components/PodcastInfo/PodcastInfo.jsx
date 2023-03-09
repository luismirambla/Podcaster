import React, { useContext } from "react"
import PodcastsContext from "../../contexts/podcastsContext"
import './PodcastInfo.css'

const PodcastInfo = (props) => {
  const { Podcasts } = useContext(PodcastsContext)
  const { podcastId } = props

  const podcastFound = Podcasts.find(podcast => podcast.id.attributes['im:id'] === podcastId)

  return (
      <div className="podcast-info">
        {podcastFound ?
          <>
            <img className="podcast-info-img" src={podcastFound["im:image"][2].label} alt={podcastFound.title} />
            <hr />
            <div>
              <h2 className="podcast-info-title">{podcastFound["im:name"].label}</h2>
              <p className="podcast-info-author">by {podcastFound["im:artist"].label}</p>
            </div>
            <hr />
            <div>
              <h3 className="podcast-info-description">Description:</h3>
              <p className="podcast-description">{podcastFound.summary.label}</p>
            </div>
          </>
          :
          <div>Cargando</div>
        }
      </div>
  )
}

export default PodcastInfo