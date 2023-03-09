
import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import imgIcon from "./assets/iconos/dom.png"


function App() {
  

  useState({})
  const [latitude, setLatitude]= useState(``)
  const [longitude, setLongitude]= useState(``)
  const [clima, setClima]=useState("")
  useEffect(()=>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3a261a4252f7472e8aad542f835362c9&units=metric&lang=sp`)
    .then(resp=>setClima(resp.data))
    .catch(error=> console.log(error))
  },[latitude, longitude],

 
    navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      
    })
    )
  
console.log (latitude)
console.log(longitude)
console.log (setClima)


  return (
    
    <div className="App">
      <div className='header'>
        <div className='sky'>
        <h1>WEATHER APP</h1>
        </div>
       
        </div>
      <div className='climate-card'>
        <div className='b1'>
          <h1>{clima?.main?.temp}°</h1>
          <img src={ clima ? `./assets/iconos/${clima?.weather?.[0]?.icon}.svg`:  imgIcon } alt="" />
      </div>
      <div className='state'>
          <h2>Humedad: <span>{clima?.main?.humidity}%</span></h2>
          <h2>Temperatura Min: <span>{clima?.main?.temp_min}°C</span></h2>
          <h2>Temperatura Max: <span>{clima?.main?.temp_max}°C</span></h2>
      </div>
      <div className='country'>
          <h1>{clima.name} - {clima?.sys?.country}</h1> 
          <h2 h2>{clima?.weather?.[0]?.description}</h2>
          
      </div>
      </div>
    
   </div>
    
  )
}

export default App
