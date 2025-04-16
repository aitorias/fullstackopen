import { useState } from 'react'

import Button from './components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
	const [all, setAll] = useState(0)

  const handleGoodClick = () => {
		const updatedGood = good + 1
    setGood(updatedGood)
		setAll(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
		setNeutral(neutral + 1)
		setAll(all + 1)
	}

  const handleBadClick = () => {
		const updatedBad = bad + 1
    setBad(updatedBad)
		setAll(updatedBad + good + neutral)
  }

	const average = all === 0 ? 0 : (good - bad) / all
	const positive = all === 0 ? 0 : (good * 100 ) / all

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
					all {all} <br />
					average {average} <br />
					positive {positive} %
        </p>
      </div>
    </>
  )
}

export default App
