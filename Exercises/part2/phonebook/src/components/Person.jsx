
const Person = (props) => {

  return (
    <div>
      {props.name} {props.number}
      <button onClick={props.deleteCallback}>Delete</button>
    </div>
  )
}

export default Person