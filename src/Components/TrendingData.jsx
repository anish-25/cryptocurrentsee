import axios from 'axios';
import React from 'react'
import { useEffect , useState} from 'react'
import './Css/TrendingData.css'
const TrendingData = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/search/trending")
    .then(response => {
      setData(response.data.coins) 
    })
    .catch((error) => console.log(error))
  
  }, [])
  


  return (
      <>
      
    <div className='container'>
    {data.map((val)=>{
        return( <div className="blurText col-12" key={val.item.coin_id}>
        <div className="coin">
         <div className="coinLogo">
           <img src={val.item.small}  alt="coins" />
         </div>
         <div className="coinName">
           <h5>{val.item.name}</h5>
         </div>
 
        </div>
     

        <div className="getPriceBtn">
          <a href={`https://www.google.com/search?q=${val.item.name}&sxsrf=ALiCzsZtEZ4ic0MjKQVB59ZvKsVaz_Ad2A:1652793584725&source=lnms&tbm=nws&sa=X&ved=2ahUKEwi9t4T0z-b3AhXtTmwGHdnjDUYQ_AUoAXoECAIQAw`} target="_blank" rel="noopener noreferrer"><button className='btn-dark'> <div className="btnText"><h5>Read News</h5></div></button></a> 
          </div>
        
         
       </div>)
      })}

    </div>
      </>
    
  )
}

export default TrendingData