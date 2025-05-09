import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const nameExists = persons.some(
      (person) =>
        person.name.trim().toLowerCase() === newName.trim().toLowerCase()
    )

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with{' '}
        <input
          type="search"
          name="search"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
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
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map((person) => {
          return (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default App
