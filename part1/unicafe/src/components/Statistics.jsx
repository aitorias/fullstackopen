import StatisticLine from './StatisticLine'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = all === 0 ? 0 : (props.good - props.bad) / all
  const positive = all === 0 ? 0 : (props.good * 100) / all

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <>
        <h2>statistics</h2>
        <h2>No feedback given</h2>
      </>
    )
  }

  return (
    <div className="statistics-container">
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
