import ResultContext from "./Context";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import CurrencyData from "../Data/CountryCurrencies.json"
import SupportedCurrencyData from "../Data/SupportedCurrency.json"
const ResultState = (props) => {
    
    var res = {
        coin : "",
        country : "",
        coinCode : "",
        CountryCode : "",
        unit : null,
        resValue : ""
        
    }
    const [result, setResult] = useState( {
      coin : "",
      country : "",
      coinCode : "",
      CountryCode : "",
      unit : null,
      resValue : ""
      
  })
    const [rawRes, setRawRes] = useState([])
    const [currency, setCurrency] = useState("")
    const [localCurrency, setLocalCurrency] = useState("")
    const [id, setId] = useState("")
    const [location, setLocation] = useState("")
    const [symbol, setSymbol] = useState("")
    let userCurInp = "";
    const [userLocInp, setUserLocInp] = useState("")
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)
  const [CryptoData, setCryptoData] = useState([])
  var finalData = []
    
  const [currencySuggestions, setCurrencySuggestions] = useState([])
  var validCurInp = []
  const [InvalidInp, setInvalidInp] = useState(false)


   // eslint-disable-next-line 
{ finalData = CurrencyData.filter((val) => {return(
  SupportedCurrencyData.find((cur) => {

    if(val.currency_code!== null) {
      if( val.currency_code.toLowerCase() === cur.toLowerCase())
      return  val.country
      else
      return null
    }
    else
    return null
  })
)
  
}

)

}
const countryList = finalData.map((val => val.country.toLowerCase()))
const nameList = CryptoData.map((val) => val.name.toLowerCase())

    const handleSubmit = async (e) =>{
    

if(currency.length>0&&location.length>0){
      if((nameList.indexOf(currency.toLowerCase())>-1) && (countryList.indexOf(location.toLowerCase()) > -1))
      setInvalidInp(false)
else {
  setInvalidInp(true)
  setEmpty(false)
}
}
    

        e.preventDefault();
        if(id.length>0&&localCurrency.length>0&&currency.length>0&&location.length>0){
          setEmpty(false)
            
            fetchResult(id,localCurrency)
         
     
        }
        else if(currency.length===0||location.length===0){
          setEmpty(true)
          setLoading(false)
          setInvalidInp(false)
        }
        
    }  
     const setValues = useCallback(() =>{
      if(id.length>0&&localCurrency.length>0&&currency.length>0&&location.length>0){
            
        setResult({
            coin : currency.toUpperCase(),
            country : location.toUpperCase(),
            coinCode : symbol.toUpperCase(),
            CountryCode : localCurrency.toUpperCase(),
            unit : 1,
            resValue : (rawRes[id][localCurrency].toLocaleString("en-US"))
    
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }},[rawRes])

    useEffect(() => {
   
      setValues()
        }, [setValues])
    
    
   
    
    const fetchResult = async () =>{
      setLoading(true)

        setResult(res)
        setTimeout(() => {
          
            
            if(id.length>0&&localCurrency.length>0&&currency.length>0&&location.length>0){
    
                axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${localCurrency}`)
                .then(response => {
                    setRawRes(response.data)
                   
              setLoading(false)

                    
                    
              
              }).catch((error) => console.log(error))
            }
        }, 700);
        setLoading(true)
      }
      const changeSymbol = (value) => {
          setSymbol(value)
      }
      const changeCurrency = (value) => {
        setCurrency(value)
      }
      const changeLocation = (value) => {
        setLocation(value)
      }
      const changeId = (value) => {
        setId(value)
      }
      const changeLocalCurrency = (value) => {
        setLocalCurrency(value)
      }

   
return(

    <ResultContext.Provider value={{result,fetchResult,rawRes,CryptoData,finalData,InvalidInp,setCryptoData,currency,validCurInp,changeCurrency,currencySuggestions,setCurrencySuggestions,userCurInp,userLocInp,setUserLocInp,empty, setEmpty,changeSymbol,loading,symbol,handleSubmit,id,location,changeId,changeLocation,changeLocalCurrency,localCurrency}}>

        {props.children}

    </ResultContext.Provider>


)


}

export default ResultState