import React from 'react'
import './Css/ContactPage.css'
import InstagramLogo from '../Resources/InstagramLogo.png'
import LinkedinLogo from '../Resources/LinkedinLogo.png'
import TwitterLogo from '../Resources/TwitterLogo.png'
import emailJs from 'emailjs-com'
import { useState } from 'react'






const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const [loading, setLoading] = useState(false)
  const [empty, setEmpty] = useState(false)
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")




  

  

  const sendEmail = (e) =>{
    e.preventDefault();
    if(name.trim().length === 0 || mobile.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0 ){
      setEmpty(true);
      setSuccess(false);
      setFail(false);


    }
    else{
      
 setLoading(true)
    emailJs.sendForm('service_k6vosf9','template_f74kk5m',e.target,'uzU9QaVpTK8IaHBa2')
    .then((result) => {
      console.log(result.text);
      if(result.text==="OK"){
        setSuccess(true);
        setEmpty(false);
        setFail(false);

      }
      else{
        setFail(true);
        setEmpty(false);
        setSuccess(false);

      }
      setLoading(false)
    },(error) => {
      console.log(error.text);
    })
   
  }
   
   
  }
  return (
    <>
    <div className="container-fluid mt-sm-0 mt-5">

    <div className="contactWrapper">
      
        <div className="col-xl-8 col-sm-6 col-12 d-flex align-items-center">
          <div className="mainCont">

            <div className="mainText col-12">
                <h2>Contact Me</h2>
            </div>
            <div className="textIconCont">


            <div className="subText col-xl-6 col-md-8 col-sm-10 col-12 mt-md-4 mt-2">

            <p>
              Need to Get in Touch with me? Fill out the form with
your message or Connect me through any of the 
Social Platforms using the Links provided below.

              </p> 
            </div>
            <div className="iconsCont col-6 col-xl-3 mt-xs-5 mt-2">
          <div className="instaIcon">
          <a href="https://www.instagram.com/anish.252/" target='_blank' rel="noreferrer"><img src={InstagramLogo} rel="noopener noreferrer" alt="Instagram" /></a>
          </div>
          <div className="twitterIcon">
          <a href="https://twitter.com/Anish2525" target='_blank' rel="noreferrer"><img src={TwitterLogo} rel="noopener noreferrer" alt="Twitter" /></a>

          </div>

          <div className="gitIcon">
          <a href="https://www.linkedin.com/in/anish-menon-402777191/" target='_blank' rel="noreferrer"><img src={LinkedinLogo} rel="noopener noreferrer" alt="Linkedin" /></a>

          </div>
            </div>
            </div>
        </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10 mt-sm-5 mt-3">
            <form id='contactForm' onSubmit={sendEmail}>
           <div className="form ">
          <div className="name col-12">
            <div className="label col-md-4 col-3">
              <label htmlFor="name">
            <h4>Name :</h4>
            </label>
            </div>
            <div className="nameForm col-md-8 col-9">
              <input type="text" placeholder='Your Name' name='name' onChange={(e) => {setName(e.target.value)}}/>

            </div>
          </div>
          <div className="name col-12">
            <div className="label col-md-4 col-3">
              <label htmlFor="number">
            <h4>Mobile :</h4>
            </label>
            </div>
            <div className="nameForm col-md-8 col-9">
              <input type="text" placeholder='Your Mobile' name='mobile' onChange={(e) => {setMobile(e.target.value)}}/>

            </div>
          </div>
          <div className="name col-12">
            <div className="label col-md-4 col-3">
            <h4>Email ID :</h4>
            </div>
            <div className="nameForm col-md-8 col-9">
              <input type="email" placeholder='Your Email-ID' name='email' autoComplete='off' onChange={(e) => {setEmail(e.target.value)}}/>

            </div>
          </div>
          <div className="message col-12">
            <div className="label col-md-8 col-12">
            <h4>Message</h4>
            </div>
            <div className="messageForm col-md-8 col-12">
              <textarea type="" placeholder='Write your message here...' name='message' onChange={(e) => {setMessage(e.target.value)}}/>

            </div>
          </div>
          <div className="submitButton col-12 mt-4">
            <button type='submit' className='btn-outline-dark' value='Send'><h5 className='mt-2'>Submit</h5></button>
          </div>
          <div className="statusText mt-4">
            {success&&!fail&&!empty&&!loading&&
            <p className='text-success'>Thank You. Your message has been sent successfully. <i className="fa-solid fa-circle-check"></i> </p>
            }
              {fail&&!success&&!empty&&!loading&&
              <p className='text-danger'>Unexpected error. Please try again later. <i className="fa-solid fa-circle-exclamation"></i> </p>

            }
              {empty&&!success&&!fail&&!loading&&
              <p className='text-danger'>All Fields are Mandatory. <i className="fa-solid fa-circle-exclamation"></i> </p>

            }
              {loading&&
                   <div className="spinner-border text-success" role="status">
  <span className="sr-only">Loading...</span>
</div>

            }
   
     

            <br />

           </div>
           </div>
           </form>
          
          </div>
          </div>
        
   
        </div></>
  )
}

export default ContactPage