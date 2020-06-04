import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TableLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  const good = props.values.good
  const neutral = props.values.neutral
  const bad = props.values.bad
  const all = props.values.good + props.values.neutral + props.values.bad
  const average = ((props.values.good * 1 + props.values.bad * -1) / all).toFixed(1)
  const positive = (good / all * 100).toFixed(1).toString() + " %"

  if (all === 0) return (
    <div>No feedback given</div>
  )

  return (
    <table>
      <tbody>
        <TableLine text="Good" value={good} />
        <TableLine text="Neutral" value={neutral} />
        <TableLine text="Bad" value={bad} />
        <TableLine text="All" value={all} />
        <TableLine text="Average" value={average} />
        <TableLine text="Positive" value={positive} />
      </tbody>
    </table>
  )

}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics values={{good: good, neutral: neutral, bad: bad}} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
