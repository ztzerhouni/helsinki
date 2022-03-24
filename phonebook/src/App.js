import { useState } from 'react'
import Person from "./components/Person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '202-415-2100', id: 1, },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

  const handleNewNameChange = (event) => {
    console.log('Name Change',event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    console.log('Number Change',event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchString = (event) => {
    console.log('Search String', event.target.value)
    setSearchString(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    console.log('Is person in phonebook?',persons.map(person => person.name).includes(newName))
    const newNameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (!persons.map(person => person.name).includes(newName)) {
      setPersons(persons.concat(newNameObject))
    }
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input
                            value={searchString}
                            onChange={handleSearchString}
                          />
      </div>
      <h2>Add a new entry</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNewNameChange}
           />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNewNumberChange}
                  />
        </div>
        <div>
          <button type="submit">
            add
          </button>
          <h2>Numbers</h2>
          {persons.map(person => 
            <Person key={person.id} person={person}></Person>
            )}
        </div>
      </form>
    </div>
  )
}

export default App