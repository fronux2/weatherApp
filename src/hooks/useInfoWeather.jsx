import { useState,useEffect } from "react"
import apiConfig from '../components/config.dev'
export default function useInfoWeather (){
    const [current, setCurrent] = useState()
    const [foreCast, setForeCast] = useState()
    const [hour, setHour] = useState()
  
    useEffect(() => {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiConfig.apiUrl}&q=${'san bernardo'}&q=07112&days=7`)
        .then(res => res.json())
        .then(data => {
          setCurrent(data)
          setForeCast(data.forecast.forecastday)
        })
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiConfig.apiUrl}&q=${'san bernardo'}&q=07112&days=1`)
        .then(res => res.json())
        .then(data => {
          setHour(data.forecast.forecastday)
        })
  
      console.log('jajaw')
    }, [])

    return {current,foreCast,hour}
}