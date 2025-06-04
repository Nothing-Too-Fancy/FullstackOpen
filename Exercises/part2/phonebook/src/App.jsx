import { useState } from 'react'

const Number = (props) => {

  return (
    <div>{props.name}</div>
  )
}

const isDuplicate = (newName) => {
  return 
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

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
        name: newName
      }
      setPersons(persons.concat(numberObject))
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => 
        <Number key={person.name} name={person.name} />)}
      
    </div>
  )
}

export default App