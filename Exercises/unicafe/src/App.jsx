import { useState } from 'react'

const Display = ({text}) => {

  return (
    <h2>{text}</h2>
  )
}

const Button = ({onclick, text}) => {

  return (
    <button onClick={onclick}>{text}</button>
  )
}

const Stat = ({text, score}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{score}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  console.log(total([good, neutral, bad]))
  if(total([good, neutral, bad]) === 0)
  {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <Stat text='good' score={good} />
        <Stat text='neutral' score={neutral} />
        <Stat text='bad' score={bad} />
        <Stat text='all' score={total([good, neutral, bad])} />
        <Stat text='average' score={average(good, neutral, bad)} />
        <Stat text='positive' score={positive(good, bad, neutral)} />
      </tbody>
    </table>
  )
}


const total = (props) => {
  let totalScore = 0
  props.forEach(score => {
    totalScore += score
  })
  return totalScore
}

const average = (good, neutral, bad) => {

  return (
    (((good * 1) + (bad * -1)) / (total([good, neutral, bad]))).toFixed(2)
  )
}

const positive = (good, neutral, bad) => {

  return (
    `${((good / total([good, neutral, bad])) * 100).toFixed(2)}%`
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text='give feedback' />
      <Button 
        onclick={() => setGood(good + 1)}
        text = 'good'
      />
      <Button 
        onclick={() => setNeutral(neutral + 1)}
        text = 'neutral'
      />
      <Button 
        onclick={() => setBad(bad + 1)}
        text = 'bad'
      />
      <Display text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
