import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { getPodcasts } from "./api"
import { PodcastsProvider } from "./contexts/podcastsContext"
import './App.css'
import Header from './components/Header'
import MainView from './pages/MainView'

function App() {
  const [podcasts, setPodcasts] = useState([])

  const fetchPodcasts = async () => {
    try {
      const data = await getPodcasts()
      setPodcasts(data.feed.entry)
    } catch (error) {}
  }

  useEffect(() => {
    fetchPodcasts()
  }, [])

  return (
    <PodcastsProvider value={{podcasts: podcasts}}>
      <Router>
        <Header />
          <Routes>
            <Route path="/" exact element={podcasts ? <MainView /> : <div>Cargando datos...</div>} />
          </Routes>
      </Router>
    </PodcastsProvider>
  )
}

export default App
