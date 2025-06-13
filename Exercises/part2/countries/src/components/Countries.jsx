import Country from "./Country"
import { useState } from "react"

const Countries = (props) => {

  const [visibleItemId, setVisibleItemId] = useState(null)

  const filteredCountries = props.countries.filter((country) =>
                              country.name.common.toLowerCase()
                                .includes(props.filter.toLowerCase()))
  
  const count = filteredCountries.length

  const handleShowClick = (id) => {
    setVisibleItemId((prev) => (prev === id ? null: id))
  }

  console.log('filtered countries', filteredCountries, count)

  if(count > 10 && props.filter !== '') {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }
  else if(count < 10 && count > 1) {
    return (
      filteredCountries.map((country) =>
        <div
          key={country.ccn3}>{country.name.common}
          <button onClick={() => handleShowClick(country.ccn3)}>
            {visibleItemId === country.ccn3 ? 'Hide' : 'Show'}
          </button>
          {visibleItemId === country.ccn3 && <Country country={country} />}
        </div>
      )
    )
  }
  else if(count ===1) {
    return (
      <>
        <Country country={filteredCountries[0]} />
      </>
    )
  }
}

export default Countries