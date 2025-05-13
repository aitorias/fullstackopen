import Person from './Person'

const Persons = ({ arrayOfPersons, onClickPerson }) => {
  return (
    <>
      {arrayOfPersons.map((person) => {
        return (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            number={person.number}
            deletePerson={() => onClickPerson(person)}
          />
        )
      })}
    </>
  )
}

export default Persons
