import { useState } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Phonebook from './components/Phonebook.jsx'

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