import axios from 'axios'
import {useState, useEffect} from 'react'

const FullCountry = ({country}) => {
    const [capitalWeather,setCapitalWeather] = useState([])
    const [loading,setLoading] = useState(true)
    //console.log('latitude',country.capitalInfo.latlng[0])
    //console.log('longitude',country.capitalInfo.latlng[1])
    
    const weatherHook = () => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${REACT_APP_API_KEY}&units=metric`).then(response => {
            setCapitalWeather(response.data);
            setLoading(false);
        })
    }

    useEffect(weatherHook,[])
    
    
    
    console.log('capital weather',capitalWeather)
    
    
    
    // {country.languages.map(({key,value}) => <LanguageItem language={value}/>)}
    const LanguageList = ({languages}) => {
        return(<>{Object.entries(languages).map(([key,language]) => 
            (<LanguageItem key={key} language={language}/>))}</>)
    }

    const LanguageItem = ({language}) => {
        return(<li>{language}</li>)
    }

    const TemplateFullCountry = ({country, capitalWeather}) => {
        return (
            <div>
                <h2>{country.name.common}</h2>

                <p>capital {country.capital[0]}</p>

                <p>area {country.area}</p>

                <strong>languages:</strong>

                <ul><LanguageList languages={country.languages}/></ul>

                <br></br>

                <img alt={`flag of ${country.name.common}`} src={country.flags.png}></img>

                <h2>Weather in {country.capital[0]}</h2>

                <p>Temperature {capitalWeather.main.temp} Celsius</p>

                <img alt='weather icon' src={`http://openweathermap.org/img/wn/${capitalWeather.weather[0]['icon']}@2x.png`}></img>

                <p>Wind {capitalWeather.wind['speed']} m/s</p>
            </div>
        )
    }
    if (loading) {
        return (
            <div>
                <h1>Page is Loading</h1>
            </div>
        )
    }
    return(
        <div>
            <TemplateFullCountry 
                country={country} 
                capitalWeather={capitalWeather}/>
        </div>
      )
}

export default FullCountry