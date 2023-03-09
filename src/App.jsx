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
  const limit = 100
  const genre = 1310
  const [podcastsData, setPodcastsData] = useState([])
  const [details, setDetails] = useState([])

  const fetchPodcasts = async (limit, genre) => {
    try {
      const data = await getPodcasts(limit, genre)
      setPodcastsData(data.feed.entry)
    } catch (error) {}
  }

  useEffect(() => {
    fetchPodcasts(limit, genre)
  }, [])
  
  return (
    <PodcastsProvider value={{Podcasts: podcastsData, PodcastDetails: details, setDetails}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={podcastsData ? <MainView /> : <div>Cargando datos...</div>} />
          <Route path="/podcast/:podcastId" exact element={<PodcastDetails />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" exact element={<EpisodeDetails />} />
        </Routes>
      </Router>
    </PodcastsProvider>
  )
}

export default App
