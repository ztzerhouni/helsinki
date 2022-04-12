const Country = ({country, handleShowCountry}) => {
  
  const testClick = () => {
    console.log(country.name.common)
  }

  return(
        <p>{country.name.common} <button onClick={testClick}>show</button></p>
      )
}

export default Country