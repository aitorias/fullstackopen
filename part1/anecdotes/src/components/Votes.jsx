const Votes = ({ votes }) => {
  if (votes === 0) {
    return <p>Has no votes</p>
  } else if (votes === 1) {
    return <p>Has {votes} vote</p>
  }

  return <p>Has {votes} votes</p>
}

export default Votes
