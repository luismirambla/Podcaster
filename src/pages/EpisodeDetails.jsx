import React from "react"
import PodcastInfo from "../components/PodcastInfo/PodcastInfo"
import Episode from "../components/Episode/Episode"

function EpisodeDetails() {

  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <PodcastInfo />
      <Episode />
    </div>
  )
}

export default EpisodeDetails