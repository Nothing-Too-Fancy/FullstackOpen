const Country = (props) => {
console.log(props.country)
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
    </div>
  )
}

export default Country