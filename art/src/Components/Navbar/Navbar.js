import {Component} from 'react';
import "../Navbar/Navbar.css"
import logo from '../Image/Rectangle 1.png'
import logoo from '../Image/ART.png'
import Banner from '../Image/lion.jpeg'




class Navbar extends Component{
  state= {clicked: false};
  handleClick = () => {
    this.setState({clicked :!this.state.clicked })
  }
  render() {

  return (
    <>
    <nav>
     <a href="index.html"> 
       <img src= {logo} alt='' />
       <img src= {logoo} alt='' />

     </a>
    
     
     
     <div>
      <ul id='navbar' className=
      {this.state.clicked ? "#navbar active" : "#navbar"}>
        <li>
          <a href='index.html'>Home</a>
        </li>
        <li>
          <a href='index.html'>about</a>
        </li>
        <li>
          <a href='index.html'>service</a>
        </li>
        <li>
          <a href='index.html'>contact</a>
        </li>
      </ul>
     </div>

     <div id='mobile' onClick=
     {this.handleClick}>
      <i id="bar"
      className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}>

      </i>
        
     </div>
     
     </nav>
     

         
     
     {/*<div className="home-text-section">
     
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
  </div>*/}
     
    </>
  )
}
}

export default Navbar