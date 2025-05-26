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

const Statistic = ({text, score}) => {

  return (
    <div>{text} {score}</div>
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
      <Statistic text='good' score={good} />
      <Statistic text='neutral' score={neutral} />
      <Statistic text='bad' score={bad} />
    </div>
  )
}

export default App
