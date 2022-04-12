const FullCountry = ({country}) => {
    
    // {country.languages.map(({key,value}) => <LanguageItem language={value}/>)}
    const LanguageList = ({languages}) => {
        return(<>{Object.entries(languages).map(([key,language]) => 
            (<LanguageItem key={key} language={language}/>))}</>)
    }

    const LanguageItem = ({language}) => {
        return(<li>{language}</li>)
    }

    return(
        <div>
            <h2>{country.name.common}</h2>

            <p>capital {country.capital[0]}</p>

            <p>area {country.area}</p>

            <strong>languages:</strong>

            <ul><LanguageList languages={country.languages}/></ul>

            <br></br>

            <img src={country.flags.png}></img>
            
        </div>
      )
}

export default FullCountry