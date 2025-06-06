import { useState, useEffect } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Phonebook from './components/Phonebook.jsx'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const isDuplicate = () => {
    return persons.find((person) => person.name === newName) ? !undefined : false
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  })

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
      <h2>Phonebook</h2>
      <Filter value={newFilter} event={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm submit={addNumber} name={newName} number={newNumber} onNameChange={handleNameChange} onNumChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Phonebook persons={persons} filter={newFilter}></Phonebook>
    </div>
  )
}

export default App