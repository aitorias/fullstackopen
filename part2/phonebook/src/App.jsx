import { useEffect, useState } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/persons/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((personsData) => setPersons(personsData))
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    const nameExists = persons.some(
      (person) =>
        person.name.trim().toLowerCase() === newName.trim().toLowerCase()
    )

    if (nameExists) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const foundPerson = persons.find(
          (person) =>
            person.name.trim().toLowerCase() ===
            newPerson.name.trim().toLowerCase()
        )
        const changedPerson = { ...foundPerson, number: newNumber }

        personService
          .updatePerson(foundPerson.id, changedPerson)
          .then((updatedPerson) => {
            setSuccessMessage(`Updated ${newPerson.name}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
            setPersons(
              persons.map((person) =>
                person.name.trim().toLowerCase() ===
                newPerson.name.trim().toLowerCase()
                  ? updatedPerson
                  : person
              )
            )
            setNewName('')
            setNewNumber('')
          })
          .catch((error) => {
            setErrorMessage(
              `Error updating ${newPerson.name}\n Error: ${error}`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(
              persons.map((person) => person.name !== changedPerson.name)
            )
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personService
        .createPerson(newPerson)
        .then((addedPerson) => {
          setSuccessMessage(`Added ${newPerson.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setPersons(persons.concat(addedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch((error) => {
          setErrorMessage(`Error creating ${newPerson.name}\n Error: ${error}`)
        })
    }
  }

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleDeletePerson = (person) => {
    if (person && window.confirm(`Delete ${person.name} ?`)) {
      personService
        .deletePerson(person.id)
        .then((deletedPerson) => {
          setSuccessMessage(`Deleted ${person.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setPersons(persons.filter((person) => deletedPerson.id !== person.id))
        })
        .catch((error) => {
          setErrorMessage(
            `Error deleting name ${person.name}\n Error: ${error}`
          )
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} type="success" />
      <Notification message={errorMessage} type="error" />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addNewPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <div>
        <Persons
          arrayOfPersons={personsToShow}
          onClickPerson={handleDeletePerson}
        />
      </div>
    </div>
  )
}

export default App
