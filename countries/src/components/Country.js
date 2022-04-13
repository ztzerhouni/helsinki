const Country = ({country, handleShowCountry}) => {
  //console.log(country.name.common)
  
  return(
        <p>{country.name.common} 
            <button onClick={handleShowCountry}
                    value={country.name.common}>
              show
            </button>
        </p>
      )
}

export default Country