import {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

function App() {

  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('fetching country data')
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  if(countries.length === 0) {
    return (
      <></>
    )
  }
  return (
    <div>
      find countries <input value={newFilter} onChange={handleFilterChange} />
      <Countries countries={countries} filter={newFilter} />
    </div>
  )
}

export default App
