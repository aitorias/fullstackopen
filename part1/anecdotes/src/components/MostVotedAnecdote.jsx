const MostVotedAnecdote = ({ anecdotes, votes }) => {
  let mostVotedAnecdote = ''
  let biggestVote = 0

  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > biggestVote) {
      biggestVote = votes[i]
      mostVotedAnecdote = anecdotes[i]
    }
  }

  if (biggestVote >= 1) {
    return (
      <div className="most-voted-anecdote">
        <h2>Anecdote with most votes</h2>
        <p>{mostVotedAnecdote}</p>
        {biggestVote === 1 ? (
          <p>Has {biggestVote} vote</p>
        ) : (
          <p>Has {biggestVote} votes</p>
        )}
      </div>
    )
  }
}

export default MostVotedAnecdote
