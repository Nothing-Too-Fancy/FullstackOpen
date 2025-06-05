
const PersonForm = (props) => {

  return (
    <form onSubmit={props.submit}>
        <div>
          name: <input required value={props.name} onChange={props.onNameChange}/>
        </div>
        <div>
          number: <input required value={props.number} onChange={props.onNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>                     
      </form>
  )
}

export default PersonForm