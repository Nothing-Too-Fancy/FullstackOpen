const Weather = (props) => {
  
  return (
    <div>
      <h2>Weather in {props.capital}</h2>
      <div>Temperature {props.temp} Fahrenheit</div>
      <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}></img>
      <div>Wind {props.wind} mph</div>
    </div>
  )
}

export default Weather