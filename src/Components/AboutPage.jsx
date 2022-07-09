import React from 'react'
import './Css/AboutPage.css'
import AboutImg from '../Resources/AboutPageImage.svg'
import ReactLogo from '../Resources/ReactLogo.png'
import JavaScriptLogo from '../Resources/JavaScriptLogo.png'
import CssLogo from '../Resources/CssLogo.png'
import {HashLink} from 'react-router-hash-link'
import { Link } from "react-scroll";
const AboutPage = () => {
  return (
    <>
    <div className="pageWrapper mt-5">
   
    <div className='header'>
      <div className="headerText">
      <h3>ABOUT US</h3>
      </div>
      <div className="headerLine">
        <hr />
      </div>
    </div>
    <div className="contentContainer">
      <div className="aboutText row">
        <p>
        Created with a pure intention as a front-end portfolio , Cryptocurrency is a website which can fetch you the current market value of a cryptocoin in the format of currency depending upon the location selected. If the selected location is India , you'll get the values in INR and if it's United States, you'll get them in USD. 
The obvious question would be "Why not just google them ?". Well unfortunately, Google supports only the most familiar cryptocurrencies. There are market analysts who would also want to see the prices of even the least familiar ones. Cryptocurrency can provide assistance to them.
        </p>
      </div>
      <div className="statContainer row">
        <div className="stat">
        <h3>
        13,000+
        </h3>
        <p>
        Cryptocurrencies supported.
        </p>

        </div>
        <div className="stat">
   <h3>
        60+
        </h3>
        <p>
        Country formats supported.
        </p>
        </div>
      </div>
    <div className="builtInfo row col-12">
      <div className="infoText col-6">
<p>
Cryptocurrentsee is Built Primarily using Html, Css and a very Popular front-end library called React-JS. I have used useContext for State management and Axios for API Calls. Thanks to <a href="https://www.coingecko.com/" target='_blank' rel="noopener noreferrer"><strong>Coingecko</strong></a> for hosting free API on Cryptocurrency. This is Primarily built to showcase my front-end skills. 

</p>
<div className="iconsContainer">
<div className="reactLogo">
<img src={ReactLogo} alt="reactlogo" />

</div>
<div className="jsLogo">
<img src={JavaScriptLogo}  alt="JavaScriptLogo" />
  
</div>
<div className="cssLogo">
<img src={CssLogo}  alt="CssLogo" />
  
</div>
</div>
      </div>
      <div className="infoImg img-fluid col-6">
        <img src={AboutImg}  alt="about" />

</div>
    </div>
<div className="hireBtn">
<Link to="contactPage" smooth={true} duration={500}>
  <div className="hash">
  </div>
<HashLink to="#contact">
<button className='btn-primary'>

<h5 className='btnText'>Hire Me</h5>

</button>
    
</HashLink>
</Link> 
  
</div>

    </div>
       
    </div>
    </>
  )
}

export default AboutPage