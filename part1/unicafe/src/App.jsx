import { useState } from 'react'

import Button from './components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
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
      <div className="statistics-container">
        <h2>statistics</h2>
        <p>
          good {good} <br />
          neutral {neutral} <br />
          bad {bad} <br />
        </p>
      </div>
    </>
  )
}

export default App
