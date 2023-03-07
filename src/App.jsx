import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import MainView from './pages/MainView'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<MainView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
