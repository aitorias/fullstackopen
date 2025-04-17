const Statistics = (props) => {
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
