import React, { useContext } from "react"
import { Link } from "react-router-dom"
import PodcastsContext from "../../contexts/podcastsContext"
import './PodcastCard.css'

const PodcastCard = () => {
  const { Podcasts } = useContext(PodcastsContext)

  return (
    <div className="podcast-grid">
      {Podcasts.length > 0 && 
        Podcasts.map((podcast) => (
          <Link key={podcast.id.attributes['im:id']} className="podcast-card" to={`/podcast/${podcast.id.attributes['im:id']}`}>
            <div className="podcast-img-container">
              <img
                className="podcast-img"
                src={podcast["im:image"][2].label}
                alt={'tiny desk concerts'}
              />
            </div>
            <div className="card-body">
              <p className="card-title" title={podcast["im:name"].label}>
                {podcast["im:name"].label.length > 29 ? 
                  podcast["im:name"].label.substring(0, 29) + "..."
                  : 
                  podcast["im:name"].label}
              </p>
              <p className="card-author" title={podcast["im:artist"].label}>
                {podcast["im:artist"].label.length > 18 ? 
                  `Author: ${podcast["im:artist"].label.substring(0, 18)}...`
                  : 
                  `Author: ${podcast["im:artist"].label}`}
              </p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default PodcastCard