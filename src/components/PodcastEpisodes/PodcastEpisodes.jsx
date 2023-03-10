import React, { useContext } from "react"
import { Link } from "react-router-dom"
import PodcastsContext from "../../contexts/podcastsContext"
import './PodcastEpisodes.css'

const PodcastEpisodes = (props) => {
  const { podcastId } = props
  const { PodcastDetails, loading } = useContext(PodcastsContext)

  const timeFormat = (time) => {
    const seg = Math.floor((time / 1000) % 60)
    const min = Math.floor((time / 1000 / 60) % 60)
    const hrs = Math.floor(time / 1000 / 60 / 60)
    const timeFormated = `${hrs > 0 ? hrs.toString().padStart(2, "0") + ":" : ''}${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`

    return timeFormated
  }

  return (
    <div className="podcast-episodes">
      <h1>Episodes: {`${!loading ? PodcastDetails.length : ''}`}</h1>
      <div className="table-episodes">
        <div className="table-header">
          <p className="episode-title header">Title</p>
          <p className="episode-column header">Date</p>
          <p className="episode-column header">Duration</p>
        </div>
        <hr className="table-header-hr"/>
        {!loading && PodcastDetails.map((podcast, index) => (
          <div key={podcast.trackId} >
            <div className="episode-container" style={{backgroundColor: `${(index + 1) % 2 ? '#F6F6F6' : '#FFFFFF'}`}} >
              <p className="episode-title"><Link className="episode-link" to={`/podcast/${podcastId}/episode/${podcast.trackId}`}>{podcast.trackName}</Link></p>
              <p className="episode-column">{`${new Date(podcast.releaseDate).toLocaleDateString('es-ES')}`}</p>
              <p className="episode-column">{timeFormat(podcast.trackTimeMillis)}</p>
            </div>
            {PodcastDetails.length - 1 !== index && <hr />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PodcastEpisodes
