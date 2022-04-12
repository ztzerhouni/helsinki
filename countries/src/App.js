import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import Countries from "./components/Countries"

function App() {
  const [countries, setCountries] = useState([])
  const [searchString, setSearchString] = useState('')

  const handleSearchString = (event) => {
    setSearchString(event.target.value)
  }
  //console.log("searchString",searchString)

  

  const hook = () => {
    //console.log('effect')
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
      //console.log('promise fulfilled')
      setCountries(response.data)
    })
  }

  useEffect(hook,[])

  return (
    <div>
      <h1>Countries</h1>
      <Filter searchString={searchString} handleSearchString={handleSearchString}/>
      <Countries countries={countries} searchString={searchString} ></Countries>
    </div>
  );
}

export default App;
