import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherChance = () => {

// llamar a la Api para consumo
    const api = {
        key: "6897765b297b912b5d59c01a10df8a8b",
        base: "https://api.openweathermap.org/data/2.5/"
    }

// Se declara las variables iniciales.
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

// Consulta de api
    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }
    const success = pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        axios.get(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`)
            .then(res => setWeather(res.data));
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, []);

    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick);
    }

    const convertion = (temp) => {
        const fahrenheit = ((temp * 9 / 5) + 32).toFixed(2) + "°F";
        const centigrade = temp.toFixed(2) + "°C";
        return isClick ? fahrenheit : centigrade;
    }

// Se crea array con los meses
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
// Se crea variables horas y minutos
    const timeBuilder = (d) => {
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let timeOfDay = (hours >= 12) ? "PM" : "AM";
        return `${hours}:${minutes} ${timeOfDay}`

    }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp < 16) ? 'app warm' : 'app') : 'app'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Welcome, search and enter..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>

                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}.</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                            <div className="time">{timeBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {convertion(weather.main.temp)}
                            </div>
                            <button className='button-convertion' onClick={handleClick}>Convertion</button>
                            <div className="weather">{weather.weather[0].main}</div>
                            <img className='icon' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                        </div>
                    </div>
                ) : ('')}


            </main>
        </div>
    );

};

export default WeatherChance;