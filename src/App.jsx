import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { getPodcasts } from "./api"
import { PodcastsProvider } from "./contexts/podcastsContext"
import './App.css'
import Header from './components/Header/Header'
import MainView from './pages/MainView'
import PodcastDetails from "./pages/PodcastDetails"
import EpisodeDetails from "./pages/EpisodeDetails"

const localStorageKey = 'podcasts'

function App() {
  const [podcastsData, setPodcastsData] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || [])
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false)
  const [saveDate, setSaveDate] = useState(localStorage.getItem(`${localStorageKey}_fecha`))
  const limit = 100
  const genre = 1310

  const fetchPodcasts = async (limit, genre) => {
    try {
      setLoading(true)
      const data = await getPodcasts(limit, genre)
      setPodcastsData(data.feed.entry)
      localStorage.setItem(localStorageKey, JSON.stringify(data.feed.entry))
      localStorage.setItem(`${localStorageKey}_fecha`, Date.now())
      setSaveDate(localStorage.getItem(`${localStorageKey}_fecha`))
      setLoading(false)
    } catch (error) {}
  }

  useEffect(() => {
    if (!localStorage.getItem(localStorageKey) || saveDate && (Date.now() - saveDate) >= 86400000) {
      localStorage.removeItem(localStorageKey)
      localStorage.removeItem(`${localStorageKey}_fecha`)
      fetchPodcasts(limit, genre)
    } else {
      setPodcastsData(JSON.parse(localStorage.getItem(localStorageKey)))
    }
  }, [])
  
  return (
    <PodcastsProvider value={{Podcasts: podcastsData, PodcastDetails: details, setPodcastsData, setDetails, loading, setLoading}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<MainView />} />
          <Route path="/podcast/:podcastId" exact element={<PodcastDetails />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" exact element={<EpisodeDetails />} />
        </Routes>
      </Router>
    </PodcastsProvider>
  )
}

export default App
