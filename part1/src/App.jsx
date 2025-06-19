
const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ parts, exercises }) => {
  return (
    <div>
      <Part part={parts.part1} exercise={exercises.exercises1}/>
      <Part part={parts.part2} exercise={exercises.exercises2}/>
      <Part part={parts.part3} exercise={exercises.exercises3}/>
    </div>
  )
}

const Total = ({ exercises }) => {
  return <p>Number of exercises {exercises.exercises1 + exercises.exercises2 + exercises.exercises3}</p>
}

const Part = ({ part, exercise }) => {
  return(
    <p>
      {part} {exercise}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content
        parts={{ part1: part1.name, part2: part2.name, part3: part3.name }}
        exercises={{
          exercises1: part1.exercises,
          exercises2: part2.exercises,
          exercises3: part3.exercises
        }}
      />
      <Total
        exercises={{
          exercises1: part1.exercises,
          exercises2: part2.exercises,
          exercises3: part3.exercises
        }}
      />
    </div>
  )
}

export default App