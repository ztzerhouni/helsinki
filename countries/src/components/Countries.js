import Country from "./Country"
import FullCountry from "./FullCountry"
import {useState} from 'react'

const Countries = ({countries, searchString}) => {
    const [showCountry, setShowCountry] = useState(false)
    const [singleCountry, setSingleCountry] = useState('')

    const handleShowCountry = (event) => {
      //console.log(selectedCountry)
      setShowCountry(!showCountry)
      setSingleCountry(event.target.value)
    }

    const searchRegex = RegExp(searchString,'i')
    const filteredCountries = countries
      .filter(country => country.name.common.match(searchRegex))
      .sort(function(a,b) {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    })
    //console.log(filteredCountries.length)
    if(filteredCountries.length === 1) {
      return (
        <>{filteredCountries.map(country =>
          <FullCountry key={country.name.common} country={country}></FullCountry>)}
        </>
        
      )
    }
    if(filteredCountries.length > 10) {

      return (
        <p>Too many matches. Please specify another filter.</p>
      )
    }
    else {
      if (showCountry === true) {
  
        return (
          <>
            {countries.filter(country => country.name.common.match(RegExp(singleCountry,'i'))).map(country => <FullCountry key={country.name.common} country={country}/>)}
            
            <button onClick={handleShowCountry}>Hide</button>
          </>
        )
      }
      return (
        <>
          {filteredCountries.map(country => 
            <Country key={country.name.common} country={country} handleShowCountry={handleShowCountry}/>
          )}
        </>
      )
    }
}

export default Countries