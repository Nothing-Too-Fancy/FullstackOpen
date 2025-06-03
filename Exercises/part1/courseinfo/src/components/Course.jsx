const Header = (props) => {
  
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {

  return (
    <>
      {props.name} {props.exercise}
      <br></br>
    </>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      )}
    </div>
  )
}

const Total = (props) => {
  const parts = props.parts
  return (
    <div>
      Number of exercises {parts.reduce((total, parts) => total + parts.exercises, 0)}
    </div>
  )
}

const Course = ({course}) => {

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course