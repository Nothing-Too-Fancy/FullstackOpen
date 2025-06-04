import { useState } from 'react'

const Number = (props) => {

  return (
    <div>{props.name} {props.number}</div>
  )
}

const isDuplicate = (newName) => {
  return 
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const isDuplicate = () => {
    return persons.find((person) => person.name === newName) ? !undefined : false
  }

  const addNumber = (event) => {
    event.preventDefault()

    if(isDuplicate()) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const numberObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(numberObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      filter shown with: <input value={newFilter} onChange={handleFilterChange}/>
      <form onSubmit={addNumber}>
        <h2>Add a new</h2>
        <div>
          name: <input required value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input required value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>                     
      </form>
      <h2>Numbers</h2>
      {persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase())).map((person) => 
        <Number key={person.name} name={person.name} number={person.number} />)}
      
    </div>
  )
}

export default App