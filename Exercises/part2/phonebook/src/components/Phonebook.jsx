import Person from "./Person"

const Phonebook = (props) => {

  return (
    <>
    {props.persons.filter((person) => person.name.toLowerCase().includes(props.filter.toLowerCase())).map((person) => 
        <Person key={person.name} name={person.name} number={person.number} />)}
    </>
  )
}

export default Phonebook