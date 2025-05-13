const Person = ({ id, name, number, deletePerson }) => {
  return (
    <div>
      <p>
        {name} {number}{' '}
        <button type="button" id={`button-${id}`} onClick={deletePerson}>
          delete
        </button>
      </p>
    </div>
  )
}

export default Person
