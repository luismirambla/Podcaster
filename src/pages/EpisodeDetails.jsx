import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PodcastInfo from '../components/PodcastInfo/PodcastInfo'
import Episode from '../components/Episode/Episode'
import PodcastsContext from '../contexts/podcastsContext'
import { getPodcastData } from '../api'

function EpisodeDetails() {
  const { setDetails, setLoading } = useContext(PodcastsContext)
  let location = useLocation()
  const podcastId = location.pathname.split('/')[2]
  const episodeId = location.pathname.split('/')[4]
  const [saveDate, setSaveDate] = useState(localStorage.getItem(`${podcastId}_fecha`))
  const limit = 100

  const fetchPodcastDetails = async (id, limit) => {
    try {
      document.documentElement.scrollTop = 0
      if (!localStorage.getItem(podcastId) || saveDate && (Date.now() - saveDate) >= 10000) {
        localStorage.removeItem(podcastId)
        localStorage.removeItem(`${podcastId}_fecha`)
        setLoading(true)
        const data = await getPodcastData(id, limit)
        data.results.shift()
        setDetails(data.results)
        localStorage.setItem(id, JSON.stringify(data.results))
        localStorage.setItem(`${id}_fecha`, Date.now())
        setSaveDate(localStorage.getItem(`${id}_fecha`))
        setLoading(false)
      } else {
        setDetails(JSON.parse(localStorage.getItem(podcastId)))
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchPodcastDetails(podcastId, limit)
  }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <PodcastInfo podcastId={podcastId}/>
      <Episode episodeId={episodeId}/>
    </div>
  )
}

export default EpisodeDetails