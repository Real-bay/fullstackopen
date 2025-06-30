
const Course = ({course}) => {
      return (
    <div>
      <Header course={course} />
      <Content
        course={course}
      />
      <Total
        course={course}
      />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({ course }) => {
  return <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
}

const Part = ({ name, exercise }) => {
  return(
    <p>
      {name} {exercise}
    </p>
  )
}

export default Course