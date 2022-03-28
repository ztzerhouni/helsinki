import Person from "./Person"

const Persons = ({persons, searchString}) => {
    const currentRegex = new RegExp(searchString,'i')
    const filteredPersons = persons.filter(person => person.name.match(currentRegex))

    return (
    <>{filteredPersons.map(person => 
        <Person key={person.id} person={person} />)}</>
    )
}

export default Persons