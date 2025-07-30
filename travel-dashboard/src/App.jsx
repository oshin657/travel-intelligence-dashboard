import './App.css'
import Currency from './components/Currency';
import Weather from './components/weather'
import {useState } from 'react'

function App() {

 const[inputValue,setInputValue]=useState("");
 const[weatherValue,setWeatherValue]=useState(null);
  const API_Key = "e58ea2b202e39f85a1ff4d981cde0e6c"

  async function handleSubmit(){
    if(inputValue.trim()==""){
      alert("Enter Some City Name.")
    }else{

      try{
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_Key}`)
      if(!weatherResponse.ok){
        throw new Error("City Not Found.")
      }
      const weatherData = await weatherResponse.json();
      setWeatherValue(weatherData);



      }catch(error){
        alert(error.message)
      }




    }


  }

  function handleText(e){
    setInputValue(e.target.value)
  }



  return (
    <>
    <div className="travel-container mt-5">
      <div className="travel-dashboard">
        <h1 className='text-3xl font-bold'> Travel Intelligence Dashboard</h1>
        <div className="city-input mt-3">
          <input type='text' placeholder='Enter City Name' className='border border-gray-600 px-2 py-1 text-lg' value={inputValue} onChange={handleText}/>
          <button className='bg-sky-500/100 text-white text-lg cursor-pointer px-2 py-1 rounded' onClick={handleSubmit}>Submit</button>
        </div>
        <div className="display-weather mt-5">
        <Weather value={weatherValue}/>
        </div>
        <div className="display-currency mt-5">
        <Currency/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
