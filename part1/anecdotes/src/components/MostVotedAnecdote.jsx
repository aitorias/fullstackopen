const MostVotedAnecdote = ({ anecdotes, votes }) => {
  let mostVotedAnecdote = ''
  let biggestVote = 0

  votes.forEach((vote) => {
    if (vote > biggestVote) {
      biggestVote = vote
      mostVotedAnecdote = anecdotes[votes.indexOf(vote)]
    }
  })

  if (biggestVote > 0) {
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
