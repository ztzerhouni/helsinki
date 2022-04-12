import Country from "./Country"
import FullCountry from "./FullCountry"
import {useState} from 'react'

const Countries = ({countries, searchString}) => {
    const [showCountry, setShowCountry] = useState(false)  

    const handleShowCountry = () => {
      setShowCountry(!showCountry)
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
          <p>Forget About It</p>
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