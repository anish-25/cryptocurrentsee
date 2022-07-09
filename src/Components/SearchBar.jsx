import React from 'react'
import './Css/SearchBar.css'
import axios from 'axios'
import { useContext } from 'react'
import resultContext from '../Context/Context'
import {useState , useEffect} from 'react'

function SearchBar() {
  const [locationSuggestions, setLocationSuggestions] = useState([])
 
  const res1 = useContext(resultContext);


useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/list")
 
    .then(response => {res1.setCryptoData(response.data)})
    .catch((error) => console.log(error))
    
})









const handleCurrencyChange = (e) => {
  res1.changeCurrency(e.target.value)

  res1.userCurInp = e.target.value;


  const userInpCur = e.target.value.toLowerCase().substring(0,e.target.value.length)
  
  const filteredCurrencySuggestions = res1.CryptoData.filter((val) => {
  return(
    val.name.toLowerCase().substring(0,userInpCur.length).includes(userInpCur)
  )
})
if(userInpCur.length===0)
res1.setCurrencySuggestions([])
else
res1.setCurrencySuggestions(filteredCurrencySuggestions)
}




const handleLocationChange = (e) => {
  res1.changeLocation(e.target.value)
  res1.setUserLocInp(e.target.value)

  const userInpLoc = e.target.value.toLowerCase().substring(0,3)
 
  const filteredLocationSuggestions = res1.finalData.filter((val) => {
    if(val.country.toLowerCase().substring(0,5).includes(userInpLoc))
    return (
      {"Country" : val.country, "Currency" : val.currency_code}
      )
      else
      return null
  
  })
  if(userInpLoc.length===0)
  setLocationSuggestions([])
  else{
    setLocationSuggestions(filteredLocationSuggestions) 
   
  } 
  
  

 }


  return (

 <>

 <form id='inpForm' onSubmit={res1.handleSubmit}>
<div className="row rowWrap">
  <div className="col-lg-6 col-10 ms-auto me-auto justify-content-center">
<div className="searchInput">

<div className="">
      <div className="row d-flex ">
          <div className={res1.currencySuggestions.length !== 0?"search-box-shown col-10 ms-auto me-auto d-flex justify-content-end":"search-box-hidden col-10 ms-auto me-auto d-flex justify-content-end"}>
               
           <input type="text" className={res1.currencySuggestions.length !== 0?"search-text-shown form-control":"search-text-hidden form-control"} value = {res1.currency} onChange = {handleCurrencyChange} placeholder="Enter a Currency here..."/>
            <a href="#" className="search-btn  ">
           <i className="fa-brands fa-bitcoin fa-3x"></i>
          </a>
          </div>
          </div>
          <div className="row d-flex ">
          {res1.currencySuggestions.length !== 0 &&(
          <div className="listGroup col-10 ms-auto me-auto">

<ul className="list-group list-group-flush">
  {res1.currencySuggestions.slice(0,20).map((value) => {return (<li className="list-group-item"  key={'id'+value.id} onClick={() => {res1.changeCurrency(value.name) ; res1.changeSymbol(value.symbol); res1.changeId(value.id); res1.setCurrencySuggestions([])}}>{value.name}</li>)})}

</ul>
          </div>
           
           ) }</div>
  
</div>

</div>
    
  </div>
  <div className="col-lg-6 col-10 ms-auto me-auto justify-content-center">
<div className="searchInput">

      <div className="row d-flex ">
          <div className={locationSuggestions.length !== 0?"search-box-shown col-10 ms-auto me-auto d-flex justify-content-end":"search-box-hidden col-10 ms-auto me-auto d-flex justify-content-end"} tabIndex="0">
               
          <input type="text"className={locationSuggestions.length !== 0?"search-text-shown form-control ms-auto":"search-text-hidden form-control"} value = {res1.location} onChange={handleLocationChange} placeholder="Type in Your Location..." />
            <a href="#" className="search-btn">
           <i className=" fa-solid fa-location-pin fa-3x  "></i>
          </a>
          </div>
          </div>
          <div className="row d-flex ">
         
          {locationSuggestions.length !== 0 &&
          <div className=" listGroup col-10 ms-auto me-auto">
<ul className="list-group  list-group-flush  ">
  {locationSuggestions.slice(0,20).map((value) => {return (<li className="list-group-item" key={'id'+value.country}  onClick={() => {res1.changeLocation(value.country) ; setLocationSuggestions([]); res1.changeLocalCurrency(value.currency_code.toLowerCase())}}>{value.country}</li>)})}
</ul>
  </div>


           
          }
</div>

</div>

</div>
    

</div>

</form>



 </>
  )
}

export default SearchBar