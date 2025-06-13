import axios from 'axios'

const api_key = import.meta.env.VITE_SOME_KEY
const baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?'
const baseLocationURL = 'http://api.openweathermap.org/geo/1.0/direct?'

const getWeather = (city, id) => {
  const request = axios.get(baseLocationURL + `q=${city},${id}&appid=${api_key}`)
                    .then(response => {
                            const {lat,lon} = response.data[0]
                            return {lat, lon}
                          })
                    .then(response => {
                            return axios.get(baseWeatherURL + `lat=${response.lat}&lon=${response.lon}&appid=${api_key}&units=imperial`)
                          })
                    .then(response => response)

  return request.then(response => response.data)
}

export default getWeather
