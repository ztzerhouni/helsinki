import { useState } from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '202-415-2100', id: 1, },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Geoffrey Adamas', number: '202-757-3498', id: 5 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchString = (event) => {
    setSearchString(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
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
      
      <div>
        <h1>Phonebook</h1>
        <Filter 
          searchString={searchString} 
          handleSearchString={handleSearchString}  />
      </div>

      <div>
        <h2>Add a new entry</h2>
        <PersonForm
          addNewName={addNewName}
          newName={newName}
          handleNewNameChange={handleNewNameChange}
          newNumber={newNumber}
          handleNewNumberChange={handleNewNumberChange} />
      </div>
      
      <div>
        <h2>Numbers</h2>
        <Persons persons={persons} searchString={searchString} />
      </div>

    </div>
  )
}

export default App