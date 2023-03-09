import React, { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getPodcastData } from "../api"
import PodcastsContext from "../contexts/podcastsContext"
import PodcastInfo from "../components/PodcastInfo/PodcastInfo"
import PodcastEpisodes from "../components/PodcastEpisodes/PodcastEpisodes"

function PodcastDetails() {
  let location = useLocation()
  const { setDetails } = useContext(PodcastsContext)
  const id = location.pathname.split('/')[2]
  const limit = 100

  const fetchPodcastDetails = async (id, limit) => {
    try {
      const data = await getPodcastData(id, limit)
      data.results.shift()
      setDetails(data.results)
    } catch (error) {}
  }

  useEffect(() => {
    fetchPodcastDetails(id, limit)
  }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <PodcastInfo podcastId={id}/>
      <PodcastEpisodes podcastId={id}/>
    </div>
  )
}

export default PodcastDetails