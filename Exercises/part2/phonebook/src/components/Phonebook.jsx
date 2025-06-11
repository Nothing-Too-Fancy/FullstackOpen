import Person from "./Person"
import personService from '../services/persons'

const deletePerson = (id, setPersons, persons) => {
  if(window.confirm(`Are you sure you want to delete ${persons.find(x => x.id === id).name}?`))
    personService.remove(id)
      .then(data => 
        setPersons(persons.filter(x => x.id !== id))
    )
}


const Phonebook = (props) => {

  return (
    <>
    {props.persons
      .filter((person) => 
        person.name.toLowerCase()
          .includes(props.filter.toLowerCase()))
            .map((person) => 
              <Person 
                key={person.name}
                name={person.name}
                number={person.number} 
                deleteCallback={() => deletePerson(person.id, props.setPersons, props.persons)}
              />)}
    </>
  )
}

export default Phonebook