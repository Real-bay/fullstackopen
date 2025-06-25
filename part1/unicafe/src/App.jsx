import { useState } from 'react'

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  return(
    <table>
      <tbody>
      <StatisticsLine text="Good" value={good}/>
      <StatisticsLine text="Neutral" value={neutral}/>
      <StatisticsLine text="Bad" value={bad}/>
      <StatisticsLine text="All" value={good + neutral + bad}/>
      <StatisticsLine text="Average" value={(good + (-1)*bad)/(good+neutral+bad)}/>
      <StatisticsLine text="Positive" value={good/(good+neutral+bad) * 100 + " %"}/>
      </tbody>
    </table>
  )
} 

const StatisticsLine = (props) => {
  const text = props.text
  const value = props.value

  return(
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>

      <h1>Statistics</h1>
      
      {(good !== 0 || neutral !== 0 || bad !== 0) ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given.</p>
      )}

    </div>
  )
}

export default App