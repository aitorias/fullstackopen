import { useState } from 'react'

import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <>
      <div className="feedback-container">
        <h2>give feedback</h2>
        <div className="buttons-container">
          <Button onClick={() => handleGoodClick()} text="good" />
          <Button onClick={() => handleNeutralClick()} text="neutral" />
          <Button onClick={() => handleBadClick()} text="bad" />
        </div>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
