import { useState, useEffect } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Phonebook from './components/Phonebook.jsx'
import personService from './services/persons.js'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const isDuplicate = () => {
    return persons.find((person) => person.name === newName) ? !undefined : false
  }

  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        setPersons(data)
      })
  }, [])

  const updateNumber = () =>  {
    const updatedPerson = persons.find((person) => person.name === newName)
    personService
      .update(updatedPerson.id, {...updatedPerson, number: newNumber})
      .then(data => {
        console.log(data.name)
        setPersons(persons.map(person => person.id === updatedPerson.id ? data : person))
  })
  }

  const addNumber = (event) => {
    event.preventDefault()

    if(isDuplicate()) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        updateNumber()
      }
    }
    else {
      const numberObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(numberObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
        })
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
      <Phonebook persons={persons} filter={newFilter} setPersons={setPersons}></Phonebook>
    </div>
  )
}

export default App