import { useEffect, useState } from "react";


// Designed the custom hook
function useCurrencyInfo(currency){
//To store the data of currency/API, if used variable then will not displayed the currency on the screen
   const [data, setData] = useState({})

   useEffect(() =>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/${currency}.json`) 
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      
   } , [currency])

   console.log(data);
   return data;
}

export default  useCurrencyInfo;