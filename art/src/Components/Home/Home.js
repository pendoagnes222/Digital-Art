import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Image/lion.jpeg'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>
        <div className="home-image-section">
          <img src={Banner} alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default Home
