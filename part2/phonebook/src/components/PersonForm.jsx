const PersonForm = ({
  onSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{' '}
        <input
          type="text"
          name="name"
          value={newName}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        number:{' '}
        <input
          type="string"
          name="number"
          pattern="^\d+(-\d+)*$"
          value={newNumber}
          onChange={handleNumberChange}
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
