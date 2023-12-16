import React from 'react'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="home-text-section">
          <h1 className="primary-heading">
          Digital Art  <br />
          Web & Digital Canvas
          </h1>
          <p className="primary-text">
          Welcome to our digital art haven! Explore a diverse collection of 
          stunning digital artworks created by talented artists. From vibrant 
          illustrations to mesmerizing digital paintings, our gallery showcases 
          the limitless possibilities of digital art. Join our community, unleash 
          your creativity, and discover the beauty of the digital canvas. Start your 
          artistic journey with us today!
          </p>
          <button className="secondary-button">
            Explore
          </button>
        </div>
    </div>
  )
}

export default Home
