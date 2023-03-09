import React from "react"
import { useLocation } from "react-router-dom"
import PodcastInfo from "../components/PodcastInfo/PodcastInfo"
import Episode from "../components/Episode/Episode"

function EpisodeDetails() {
  let location = useLocation()
  const podcastId = location.pathname.split('/')[2]
  const episodeId = location.pathname.split('/')[4]

  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <PodcastInfo podcastId={podcastId}/>
      <Episode episodeId={episodeId}/>
    </div>
  )
}

export default EpisodeDetails