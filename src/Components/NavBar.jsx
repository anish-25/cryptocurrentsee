import './Css/NavBar.css'
import Logo from '../Resources/Logo.svg'
import React from 'react'
import {HashLink} from 'react-router-hash-link'
import { Link } from "react-scroll";





function NavBar() {


  
  return (
      <>
    <div className="mainWrap">

    <div className=' NavContainer container-fluid'>
        <nav className="navbar navbar-expand-md">
<Link className="navbar-brand d-flex ms-5 align-items-left" smooth={true} duration={500}  offset={-220} to='homepage'>
  
  <img src={Logo} alt="Logo"/>
  </Link>
  <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
    

      <li className="nav-item d-flex justify-content-center align-items-center">
        
        <Link to='homepagePage' smooth={true} duration={500} spy={true} offset={-220} className="nav-link d-inline-block mt-md-3 mt-2" >
        <HashLink to="#home" className='navMenuItem'>
       <p data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</p> 
        </HashLink>
        </Link>
      </li>
       
      <li className="nav-item d-flex justify-content-center align-items-center">

        <Link to="trendingPage" smooth={true} duration={500} spy={true} className="nav-link d-inline-block mt-md-3 mt-2" >
      <HashLink to="#trending" className='navMenuItem'>
      <p data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Trending</p> 
        </HashLink>
        </Link> 
      </li>
        
      <li className="nav-item d-flex justify-content-center align-items-center">

<Link to="contactPage" smooth={true} duration={500} spy={true} className="nav-link d-inline-block mt-md-3 mt-2" >
<HashLink to="#contact" className='navMenuItem'>
<p data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</p> 

</HashLink>
</Link> 
</li>
<li className="nav-item d-flex justify-content-center align-items-center">

<Link to="aboutPage" smooth={true} duration={500} spy={true} className="nav-link d-inline-block mt-md-3 mt-2" >
<HashLink to="#about" className='navMenuItem'>
<p data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</p> 

</HashLink>
</Link> 
</li>

    </ul>
  </div>
</nav></div>
</div>



    </>
    
  )
}

export default NavBar