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
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
