import React, { useState } from 'react';
import useWeather from '../hooks/useWeather.tsx';
import CityInput from '../components/CityInput.tsx';

import styles from '../styles/styles.module.css';

const Weather = () => {

    const [city, setCity] = useState('Rochester');
    const { weather, loading, error, isError } = useWeather(city);

    const handleCitySubmit = (newCity) => {

        setCity(newCity);

    };

    return (
        
        <div className={styles.middleWidget}>
            <div>
                <CityInput onCitySubmit={handleCitySubmit}/>
            </div>
            <h3> Weather Widget </h3>
            {loading && <div>Loading...</div>}
            {isError && <div style={{color:'red'}}>{error}</div>}
            {!isError && weather && (
                <div className={styles.weatherDiv}>
                    <div>
                    <h4> Weather in {weather.city}:</h4>
                    <p> Temperature: {weather.temperature} degrees </p>
                    <p> Condition: {weather.condition}</p>
                    </div>
                    <div className={styles.weatherImageDiv}> 
                        <img src={weather.conditionImageURL} alt={weather.condition}/>    
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;