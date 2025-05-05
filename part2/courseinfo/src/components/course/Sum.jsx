const Sum = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises)

  return (
    <p>
      <strong>
        total of{' '}
        <span>{exercises.reduce((acc, exercise) => acc + exercise, 0)}</span>{' '}
        exercises
      </strong>
    </p>
  )
}

export default Sum
