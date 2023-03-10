import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getPodcastData } from '../api'
import PodcastsContext from '../contexts/podcastsContext'
import { PodcastInfo, PodcastEpisodes } from '../components'

function PodcastDetails() {
  const { setDetails, setLoading } = useContext(PodcastsContext)
  let location = useLocation()
  const id = location.pathname.split('/')[2]
  const [saveDate, setSaveDate] = useState(localStorage.getItem(`${id}_fecha`))
  const limit = 100

  const fetchPodcastDetails = async (id, limit) => {
    try {
      document.documentElement.scrollTop = 0
      if (!localStorage.getItem(id) || saveDate && (Date.now() - saveDate) >= 10000) {
        localStorage.removeItem(id)
        localStorage.removeItem(`${id}_fecha`)

        setLoading(true)

        const data = await getPodcastData(id, limit)
        data.results.shift()

        setDetails(data.results)
        localStorage.setItem(id, JSON.stringify(data.results))
        localStorage.setItem(`${id}_fecha`, Date.now())
        setSaveDate(localStorage.getItem(`${id}_fecha`))

        setLoading(false)
      } else {
        setDetails(JSON.parse(localStorage.getItem(id)))
      }
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