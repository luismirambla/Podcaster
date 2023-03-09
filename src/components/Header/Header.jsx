import React from "react"
import { Link } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import './Header.css'

const Header = () => {

  return (
    <div className="header-app">
      <div className="header-container">
        <Link className='title-app' to='/'>
          <h2>Podcaster</h2>
        </Link>
        <Spinner />
      </div>
      <hr />
    </div>
  )
}

export default Header