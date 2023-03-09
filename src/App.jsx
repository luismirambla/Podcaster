import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { getPodcasts } from "./api"
import { PodcastsProvider } from "./contexts/podcastsContext"
import './App.css'
import Header from './components/Header/Header'
import MainView from './pages/MainView'
import PodcastDetails from "./pages/PodcastDetails"
import EpisodeDetails from "./pages/EpisodeDetails"

function App() {
  const localStorageKey = 'podcasts'
  const [podcastsData, setPodcastsData] = useState(JSON.parse(window.localStorage.getItem(localStorageKey)) || [])
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false)
  const limit = 100
  const genre = 1310

  const fetchPodcasts = async (limit, genre) => {
    try {
      setLoading(true)
      const data = await getPodcasts(limit, genre)
      setPodcastsData(data.feed.entry)
      window.localStorage.setItem(localStorageKey, JSON.stringify(data.feed.entry))
      setLoading(false)
    } catch (error) {}
  }

  useEffect(() => {
    if (!window.localStorage.getItem(localStorageKey)) {
      fetchPodcasts(limit, genre)
    } else {
      setPodcastsData(JSON.parse(window.localStorage.getItem(localStorageKey)))
    }
  }, [])
  
  return (
    <PodcastsProvider value={{Podcasts: podcastsData, PodcastDetails: details, setDetails, loading, setLoading}}>
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
