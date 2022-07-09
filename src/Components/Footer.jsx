import React from 'react'
import './Css/Footer.css'
import InstagramLogo from '../Resources/InstagramLogo.png'
import LinkedinLogo from '../Resources/LinkedinLogo.png'
import TwitterLogo from '../Resources/TwitterLogo.png'
const Footer = () => {
  return (
    <>
    <div className="footerContainer">
        <div className="footerText">
        <p className='display-5'> 2022 Copyright: Cryptocurrentsee.app</p>

        </div>
        <div className="iconsCont col-sm-4 col-6 col-xl-2 mt-xs-5 mt-2">
          <div className="instaIcon footerIcon">
          <a href="https://www.instagram.com/anish.252/" target='_blank' rel="noopener noreferrer"><img src={InstagramLogo} alt="Instagram" /></a>
          </div>
          <div className="twitterIcon footerIcon">
          <a href="https://twitter.com/Anish2525" target='_blank' rel="noopener noreferrer"><img src={TwitterLogo} alt="Twitter" /></a>

          </div>

          <div className="gitIcon footerIcon">
          <a href="https://www.linkedin.com/in/anish-menon-402777191/" target='_blank' rel="noopener noreferrer"><img src={LinkedinLogo} alt="Linkedin" /></a>

          </div>
            </div>
    </div>
    </>
  )
}

export default Footer