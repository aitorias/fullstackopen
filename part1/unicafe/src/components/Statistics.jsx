import StatisticLine from './StatisticLine'

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <>
        <h2>No feedback given</h2>
      </>
    )
  }

  return (
    <div className="statistics-container">
      <h2>statistics</h2>
      <StatisticLine text="good" value={props.good} />
      <br />
      <StatisticLine text="neutral" value={props.neutral} />
      <br />
      <StatisticLine text="bad" value={props.bad} />
      <br />
      <StatisticLine text="all" value={props.all} />
      <br />
      <StatisticLine text="average" value={props.average} />
      <br />
      <StatisticLine text="positive" value={props.positive + ' %'} />
    </div>
  )
}

export default Statistics
