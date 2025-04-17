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
      <p>
        good {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad} <br />
        all {props.all} <br />
        average {props.average} <br />
        positive {props.positive} %
      </p>
    </div>
  )
}

export default Statistics
