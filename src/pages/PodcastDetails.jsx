import React, { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getPodcastData } from "../api"
import PodcastsContext from "../contexts/podcastsContext"
import PodcastInfo from "../components/PodcastInfo/PodcastInfo"
import PodcastEpisodes from "../components/PodcastEpisodes/PodcastEpisodes"

function PodcastDetails() {
  const { setDetails, setLoading } = useContext(PodcastsContext)
  let location = useLocation()
  const id = location.pathname.split('/')[2]
  const limit = 100

  const fetchPodcastDetails = async (id, limit) => {
    try {
      setLoading(true)
      const data = await getPodcastData(id, limit)
      data.results.shift()
      setDetails(data.results)
      window.localStorage.setItem(id, JSON.stringify(data.results))
      setLoading(false)
    } catch (error) {}
  }

  useEffect(() => {
    if (!window.localStorage.getItem(id)) {
      fetchPodcastDetails(id, limit)
    } else {
      setDetails(JSON.parse(window.localStorage.getItem(id)))
    }
  }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <PodcastInfo podcastId={id}/>
      <PodcastEpisodes podcastId={id}/>
    </div>
  )
}

export default PodcastDetails