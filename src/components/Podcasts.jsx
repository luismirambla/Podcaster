import React, { useContext } from "react"
import PodcastsContext from "../contexts/podcastsContext";
import PodcastCard from "./PodcastCard"
import './Podcasts.css'


const Podcasts = () => {
  const { podcasts } = useContext(PodcastsContext)

  return (
    <div className="podcasts-grid">
    {podcasts &&
      podcasts.map((podcast) => {
        return <PodcastCard podcast={podcast} key={podcast.id.attributes['im:id']} />
      })}
    </div>
  )
}

export default Podcasts