import React, { useState } from 'react'
import "./Currency.css"

function Currency() {

  
 const [amount,setAmount] = useState(1);
 const [fromCurrency,setFromCurrency] = useState("USD")
 const [toCurrency,setToCurrency] = useState("NPR")
 const [result,setResult] = useState("")
  const apiKey = "8d35b5bbf1cdc6004de78c3b"



  async function handleConvert(){

    if(amount<=0||isNaN(amount)){
      return alert("Enter Some Amount.")
    }


    const apiUrl =  `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`

    try{
      const currencyResponse = await fetch(apiUrl)
       const currencyExchange = await currencyResponse.json();
      if(currencyExchange.result==="success"){
       const currencyRate = currencyExchange.conversion_rates[toCurrency];
       const currencyResult = (currencyRate* amount).toFixed(2)
       setResult(currencyResult)
      }else{
        throw new Error("Failed To Exchange Money")
      }
      
    }catch (error){
      alert(error.message)
    }


  }
  
  return (
   <>
  <div className="currency-card">
    <h1>Convert Currency</h1>
    <div className="currency-input">
    <input type='text' placeholder='Enter Amount' className='border border-red-600 p-1' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
    <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
      <option value="USD">USD</option>
<option value="EUR">EUR</option>
<option value="INR">INR</option>
<option value="GBP">GBP</option>
<option value="NPR">NPR</option>

    </select>
    </div>
    <h1>To</h1>
     <div className="currency-input">
    <input type='text' placeholder='Result' className='border border-red-600 p-1' readOnly value={result}/>
    <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
     <option value="USD">USD</option>
<option value="EUR">EUR</option>
<option value="INR">INR</option>
<option value="GBP">GBP</option>
<option value="NPR">NPR</option>
    </select>
    </div>
   <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 cursor-pointer mt-3" onClick={handleConvert}>Convert</button>
  </div>
   </>
  )
}

export default Currency
