import { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

  const hook = () => {
    console.log('effect')
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }

  useEffect(hook,[])

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