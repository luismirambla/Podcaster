import React from "react"
import './PodcastCard.css'

const PodcastCard = () => {

  return (
    <button className="podcast-card" onClick={() => console.log('podcast')}>
      <div className="podcast-img-container">
        <img
          className="podcast-img"
          src={"https://images.assetsdelivery.com/compings_v2/victory1103/victory11032005/victory1103200500007.jpg"}
          alt={'tiny desk concerts'}
        />
      </div>
      <div className="card-body">
        <p className="card-title">Tiny Desk Concerts</p>
        <p className="card-author">Author: Mac Miller</p>
      </div>
    </button>
  )
}

export default PodcastCard