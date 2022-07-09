import React,{useContext} from 'react'
import './Css/Homepage.css'
import HeroImg from '../Resources/HeroImgCrypto.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Link } from 'react-scroll'
import {useState} from 'react'
import SearchBar from './SearchBar'
import Results from './Results'
import resultContext from '../Context/Context'
import { useEffect } from 'react'

function Homepage() {
  const [values, setValues] = useState([])
  const res = useContext(resultContext)

  return (
    <>
    <div className="container contWrapper">
    
    <div className="row pageCont justify-content-center text-center">
        <div className="col-12 wrapper col-md-6 col-sm-6 align-self-center order-2 order-sm-1 ">

        <div className="row align-items-center">
          <div className="col-12" id='results2'>
        <div className="hero-text mt-3">
        <h1> Get The Current Market Price of any 
Cryptocurrency by Searching them below. </h1>
</div>
</div>
<div className="">
<div className="col-12">
<div className="sub-text">
    <p id='#results'> Select a Currency and Choose your Location. </p>
    </div>
</div>
<div className="col-12">
    <SearchBar/>
    

</div>
</div>
        </div>
    



</div>
    
        <div className=" col-8 col-md-6 col-sm-6 col-xs-8 mt-2  align-self-center order-1 order-sm-2">
    <div className="hero-img">
        <img className='img-fluid' src= {HeroImg} alt="Cryptocurrency-animated" />
    </div>
    </div>
    </div>
   <div className="col">
   <div className="row">
 
    </div>
    <div className="row row-form">
    
    </div>
    </div>
    
   <div className="col-sm-6 col-12">

     <div className="btnContainer">
     <div className= "text-center d-flex justify-content-center align-items-center ">
      <button className="primButton" type='submit' form='inpForm'>  <h5 className='btnText display-5 mt-1'> Get Values   </h5>  </button>
      
      <div className="downArrow  d-inline-block justify-content-center align-items-center">
      <Link to={'results'} smooth={true} offset={-200}>
      <i className="fa-solid fa-angles-down"></i></Link> 
      
     
      </div>
      </div>


      
    </div>
    </div>
{
    useEffect(() => {
     setValues(res.result)

    }, [res.result])}
    <div className="resultsContainer" id='results'>
{res.empty&&!res.loading&& !res.InvalidInp &&

   <div className="d-flex justify-content-center mt-5 w-100">
   <div className="alert alert-danger alert-dismissible fade show" role="alert">
  <h5>You should check on the Fields again...</h5> 
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</div>

     


}


{res.loading && !res.empty && !res.InvalidInp&&





     <div className="spinner-border text-light" role="status">
  <span className="sr-only">Loading...</span>

     
</div>




}

{res.InvalidInp && !res.empty &&

<div className="d-flex justify-content-center mt-5 w-100">
<div className="alert alert-danger alert-dismissible fade show " role="alert">
<h5>Please select a valid Currency and Country...</h5> 
<button type="button" className="close" data-dismiss="alert" aria-label="Close">
 <span aria-hidden="true">&times;</span>
</button>
</div>
</div>




}
{(!res.loading && !res.empty && !res.InvalidInp) && (
<div className='results' >


<Results coinName ={values.coin} coinCode = {values.coinCode} countryName = {values.country} countryCode = {values.CountryCode} unit = {values.unit} result ={values.resValue}/>

</div>
)}
  
</div>

    </div>
  

    
 
    </>
  )
}

export default Homepage