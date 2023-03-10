import React, { useContext, useEffect, useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import Podcasts from "../components/Podcasts/Podcasts"
import PodcastsContext from "../contexts/podcastsContext"
import { getPodcasts } from "../api"

const localStorageKey = 'podcasts'

function MainView() {
  const { setPodcastsData, setLoading } = useContext(PodcastsContext)
  const [saveDate, setSaveDate] = useState(localStorage.getItem(`${localStorageKey}_fecha`))
  const limit = 100
  const genre = 1310

  const fetchPodcasts = async (limit, genre) => {
    try {    
      if (!localStorage.getItem(localStorageKey) || (Date.now() - saveDate) >= 10000) {
        localStorage.removeItem(localStorageKey)
        localStorage.removeItem(`${localStorageKey}_fecha`)

        setLoading(true)

        const data = await getPodcasts(limit, genre)

        setPodcastsData(data.feed.entry)
        localStorage.setItem(localStorageKey, JSON.stringify(data.feed.entry))
        localStorage.setItem(`${localStorageKey}_fecha`, Date.now())
        setSaveDate(localStorage.getItem(`${localStorageKey}_fecha`))
        
        setLoading(false)
      } else {
        setPodcastsData(JSON.parse(localStorage.getItem(localStorageKey)))
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchPodcasts(limit, genre)
  }, [])

  return (
    <>
      <SearchBar />
      <Podcasts />
    </>
  )
}

export default MainView