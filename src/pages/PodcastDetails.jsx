import React, { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getPodcastData } from "../api"
import PodcastsContext from "../contexts/podcastsContext"
import PodcastInfo from "../components/PodcastInfo/PodcastInfo"
import PodcastEpisodes from "../components/PodcastEpisodes/PodcastEpisodes"

function PodcastDetails() {
  const { setDetails, setLoading } = useContext(PodcastsContext)
  let location = useLocation()
  const id = location.pathname.split('/')[2]
  const [saveDate, setSaveDate] = useState(localStorage.getItem(`${id}_fecha`))
  const limit = 100

  const fetchPodcastDetails = async (id, limit) => {
    try {
      setLoading(true)
      const data = await getPodcastData(id, limit)
      data.results.shift()
      setDetails(data.results)
      localStorage.setItem(id, JSON.stringify(data.results))
      localStorage.setItem(`${id}_fecha`, Date.now())
      setSaveDate(localStorage.getItem(`${id}_fecha`))
      setLoading(false)
    } catch (error) {}
  }

  useEffect(() => {
    document.documentElement.scrollTop = 0
    if (!localStorage.getItem(id) || saveDate && (Date.now() - saveDate) >= 10000) {
      localStorage.removeItem(id)
      localStorage.removeItem(`${id}_fecha`)
      fetchPodcastDetails(id, limit)
    } else {
      setDetails(JSON.parse(localStorage.getItem(id)))
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