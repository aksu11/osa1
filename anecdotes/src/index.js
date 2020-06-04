import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([])

  const vote = (index) => {
    return ( () => {
      const copy = { ...points }
      copy[index] === undefined ? copy[index] = 1 : copy[index] += 1  
      setPoints(copy)
    }
    )
  }
  
  const draw = (len) => {
    return ( () => {
      const rand = Math.floor(Math.random() * len)
      setSelected(rand)
    }
    )
  }

  const voted = () => {
    const votes = Object.entries(points)
    if (votes.length === 0) return (null)
    let comp = 0
    let ind
    for(let i = 0; i < votes.length; i++) {
      if(votes[i][1] > comp) {
        comp = votes[i][1]
        ind = votes[i][0]
      }
    }
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[ind]}</div>
        <div>has {comp} votes</div>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {points[selected] === undefined ? 0 : points[selected]} votes</div>
      <button onClick={vote(selected)}>Vote</button>
      <button onClick={draw(anecdotes.length)}>Next anecdote</button>
      <div>{voted()}</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)