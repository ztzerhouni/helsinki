import { useState } from 'react'

const Button = ({text,onClick}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const arrayCopy = [...votes]
    arrayCopy[selected] += 1
    setVotes(arrayCopy)
  }

  const Favorite = () => {
    const maxVote = Math.max(...votes)
    const myArrayCopy = [...votes]
    if (votes.reduce((partialSum,currentValue) => partialSum + currentValue, 0) === 0) {
      return (
        <>No votes cast</>
      )
    }
    else {
      return (
        <>{anecdotes[myArrayCopy.indexOf(maxVote)]}</>
      )
    }
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}<br></br>
      has {votes[selected]} votes
      <br></br>
      <Button text="Vote" onClick={handleVote}></Button>
      <Button text="Next Anecdote" onClick = {handleClick}></Button>
      <br></br>
      <h1>Anecodte with the Most Votes</h1>
      <Favorite></Favorite>
    </div>
  )
}

export default App