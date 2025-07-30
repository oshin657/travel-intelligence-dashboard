import "./Weather.css"

function Weather({ value }) {
   if (!value) {
    return <p>Enter City Name To View Weather.</p>
  }

  return (
    <>
    <div className="weather-data">
      <h2 className="text-3xl">{value.name}, {value.sys.country}</h2>
      <div className="weather-details">
        <img
          src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`} 
          alt={value.weather[0].description}
        />
        <p className="temperature">{Math.round(value.main.temp)}°C</p>
      </div>
      <p className="description">{value.weather[0].description}</p>
    </div>
    </>
  );
}


export default Weather