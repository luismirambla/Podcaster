import React, { useContext } from "react"
import { Link } from "react-router-dom"
import PodcastsContext from "../../contexts/podcastsContext"
import Spinner from "../Spinner/Spinner"
import './Header.css'

const Header = () => {
  const { loading } = useContext(PodcastsContext)

  return (
    <div className="header-app">
      <div className="header-container">
        <Link className='title-app' to='/'>
          <h2>Podcaster</h2>
        </Link>
        {loading &&
          <Spinner />
        }
      </div>
      <hr />
    </div>
  )
}

export default Header