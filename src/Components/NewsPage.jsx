import React from 'react'
import TrendingData from "./TrendingData"
import './Css/NewsPage.css'
const NewsPage = () => {
  
  return (
 <>
 <div className="container-fluid trendingWrapper">
<div className="mainTextContainer" id='trending' >
  <h1 className="mainText">
    TOP 7 TRENDING CURRENCIES IN LAST 24 HOURS. 
  </h1>
</div>
<div className="trendingData">
<TrendingData/>

</div>
 </div>
 </>
  )
}

export default NewsPage