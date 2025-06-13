import getWeather from "../services/weather"
import Weather from "./Weather"
import { useState, useEffect} from "react"

const Country = (props) => {

  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    getWeather(props.country.capital[0], props.country.ccn3)
      .then(response => {
        console.log('response', response)
        setWeatherData(response)
      })
    }, [])

  if(weatherData === null)
    return(<></>)

  return (
    <div>
      <h1 className='name'>{props.country.name.common}</h1>
      <div>Capital {props.country.capital}</div>
      <div>Area {props.country.area}</div>
      <h2 className="languages">Languages</h2>
      <ul>
        {Object.entries(props.country.languages)
          .map(([key, value]) =>
            <li key={key}>
              {value.toString()}
            </li>)
        }
      </ul>
      <img src={props.country.flags.png}></img>
      <Weather 
        capital={props.country.capital} 
        temp={weatherData.main.temp} 
        wind={weatherData.wind.speed} 
        icon={weatherData.weather[0].icon} />
    </div>
  )
}

export default Country