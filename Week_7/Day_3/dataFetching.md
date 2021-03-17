# Fetching Data

### Instructor: Francis Bourgouin


## Content
- Recap on hooks
- Fetching information from an API
- Immutable data patterns with Objects and Arrays
- useEffect hook

## Weather App

Fetch the current weather information from a specific city

### What does it do

- CityForm - a form where the user can input the name of a city
- WeatherWidget
- TimeWidget
- DynamicBackground

### CityForm

```javascript
import {useState} from "react";

export default function CityForm(props) {
  const [city, setCity] = useState("");

  // we could create a bunch of states for every input like below but that would become a problem as we grow the form

  // const [formData, setFormData] = useState({
  //   city: "",
  //   province: "",
  // }) 

  const handleChange = event => {
    const {name, value} = event.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    // will only update the state of App, currentCity when the form is submitted
    props.handleSubmitAction(formData.city)
  }

  return (
    <form>
    /* the reason we call it a controlled form is because we need to control the state on render()'s */
      <input name="city" placeholder="Enter the city name" onChange={handleChange}>
      <input name="province" placeholder="Enter the province name" onChange={handleChange}>
      <button>Fetch the weather!</button>
    </form>
  )
}
```

### App

```javascript
import {useState} from 'react'
import axios from 'axios'
import CityForm from './components/CityForm';

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  const updateCityAndWeather = cityName => {
    setCurrentCity(cityName)
    // fetching the data here would cause an axios call for EVERY submit action, we can use useEffect hooks to only make an axios call when the city actually changes
  }

  useEffect(()=>{
    //cannot conditionally have a useEffect so we set a condition inside to ensure that the calls are only made when current city is valid
    if (currentCity) {
      const appId = ""// a long string
      axios
        .get(`https://path.to/api/weather?q=${currentCity}&appId=${appId}`)
        .then(res => setCurrentWeatherData(res.data))
        .catch(e => {
          console.log(e)
          setCurrentWeatherData(null)
        })
      }
    },[currentCity])
      //everything in the dependency array is a reference to a value somewhere in the app NORMALLY A STATE VALUE


  return(
    <div className="App">
      <CityForm handleSubmitAction={updateCityAndWeather} />
      {currentWeatherData && <Weather currentWeatherData={currentWeatherData}/>}
    </div>
  )
}
```

### Weather Widget

```javascript
import {weatherResponse} from '../weather'
// json object static for testing

export default function WeatherWidget(props) {
  const {currentWeatherData} = props;
    useEffect(()=> {
      const report = ()=> console.log("You clicked!")
      document.addEventListener('click', report)

      return () => document.removeEventListener('click', report)
      
  }, [])
  // if we have this useEffect hook it will be there even if the component is not rendered unless we return
  return (
    <section>
      <h1>Current weather for {currentWeatherData.main.city}</h1>
      <h2>{currentWeatherData.main.temp}</h2>
    </section>
  )
}
```

## useEffect

We only care about three things:

1) What is in the anonymous function
2) What is in the dependency array
3) What we are returning from the anonymous function

```javascript
useEffect(()=>{
  // content to be executed when the useEffect is in effect

  // return a way to stop the running code
}, [/*variable that you want to look at and execute when changed*/])
```

Some simple use cases and rules

* Axios without useEffect is bad
* eventHandler without useEffect is bad
* useEffects cannot be wrapped in conditions but can have conditions inside them

