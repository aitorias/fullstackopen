import Person from './Person'

const Persons = ({ arrayOfPersons }) => {
  return (
    <>
      {arrayOfPersons.map((person) => {
        return (
          <Person key={person.id} name={person.name} number={person.number} />
        )
      })}
    </>
  )
}

export default Persons
