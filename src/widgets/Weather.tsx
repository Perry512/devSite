import React, { useState } from 'react';
import useWeather from '../hooks/useWeather.tsx';
import CityInput from '../components/CityInput.tsx';

const Weather = () => {

    const [city, setCity] = useState('');
    const { weather, loading, error } = useWeather(city);

    const handleCitySubmit = (newCity) => {

        setCity(newCity);

    };

    return (
        
        <div>
            <div>
                <CityInput onCitySubmit={handleCitySubmit}/>
            </div>
            <h3> Weather Widget </h3>
            {loading && <div>Loading...</div>}
            {error && <div style={{color:'red'}}>{error}</div>}
            {weather && (
                <div>
                    <h4> Weather in {weather.city}:</h4>
                    <p> Temperature: {weather.temperature} degrees </p>
                    <p> Condition: {weather.condition}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;