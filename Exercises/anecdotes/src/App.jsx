import { useState } from 'react'

const Button = ({onclick, text}) => {

  return (
    <>
      <button onClick={onclick}>{text}</button>
    </>
  )
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const incrementVote = (setVote, index) => {
  setVote(prevVotes => {
    const updated = [...prevVotes]
    updated[index]++
    return updated
  })
}

const findMostVotes = (votes) => {
  let maxIndex = 0
  for(let i = 1; i < votes.length; i++) {
    if(votes[i] > votes[maxIndex])
      maxIndex = i
  }

  return maxIndex
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <Button onclick={() => incrementVote(setVote, selected)} text='vote' />
      <Button onclick={() => setSelected(getRandomInt(anecdotes.length))} text='next anecdote'/>
      
      <h3>Anecdote with the most votes</h3>
      <div>{anecdotes[findMostVotes(votes)]}</div>
      <div>has {votes[findMostVotes(votes)]} votes</div>
    </div>

  )
}

export default App