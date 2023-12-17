import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Image/lion.jpeg'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      {/*<div className='home-banner-container'>
        <div className="home-image-section">
          <img src={Banner} alt="" />
        </div>
  </div>*/}
  <div id='img-banner'>
  <img src={Banner} alt="" />
  
      </div>
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
