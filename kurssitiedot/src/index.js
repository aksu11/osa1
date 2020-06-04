import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.p}</p>
  )
}

const Content = (props) => {
  props.parts.forEach(part => {
    console.log(props.parts.indexOf(part))
  });
  return (
    props.parts.map((part) => 
      <Part key={props.parts.indexOf(part)} p={part.name +" "+part.exercises} />
    )
  )
}

const Total = (props) => {
  return (
    <p>Total {props.parts[0].exercises+
      props.parts[1].exercises+props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
