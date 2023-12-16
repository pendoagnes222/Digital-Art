import {Component} from 'react';
import "../Navbar/Navbar.css"
import logo from '../Image/Rectangle 1.png'
import logoo from '../Image/ART.png'


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
     
    </>
  )
}
}

export default Navbar