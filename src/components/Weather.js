
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState({})
    const [change, setchange] = useState(true);
    const [temperature, setAssigntemperature] = useState(0)

    const success = pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        console.log(lat, lon)

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6897765b297b912b5d59c01a10df8a8b`)
            .then(res => setWeather(res.data));

    }
    console.log(weather)

    const convert = () => {
        if (change) {
            const far = (weather.main?.temp - 273.15) * (9 / 5) + 32;
            setAssigntemperature(far.toFixed(2))
            setchange(false)

        } else {
            const degrees = (weather.main?.temp) - (273.15)
            setAssigntemperature(degrees.toFixed(2))
            setchange(true)
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, []);


    return (

        <div className="App">
            <h2>Welcome weather</h2>            
            <p className="name">{weather.name},{weather.sys?.country}.</p>
           

            <h3>{temperature} °C</h3>
            <p>Min  {weather.main?.temp_min} °K | Max {weather.main?.temp_max} °K</p>
            <p>Pressure {weather.main?.pressure} hPa</p>
            <p>Humidity {weather.main?.humidity} %</p>
            
            <h1>
                {" "}
                {Math.floor(weather.main?.temp - 273.15)}
                <sup>o</sup>
            </h1>

            <span className="temperature">{temperature}</span>
            <span className="temperature">{weather.coords?.lat}</span>

            <div className="button">
                <button onClick={convert}>Chance weather</button>
            </div>

            <img className='icon' src={weather.weather?.[0].icon ? `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png` : ""} alt="" />
        </div>


    )

}
export default Weather;