import { useState, useEffect } from 'react';
import { getCoordinates, getWeather } from '../utils/weatherAPI.tsx';

interface WeatherData {
    city: string;
    temperature: number;
    condition: string;
    conditionImageURL: string;

}

const useWeather = (city: string) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);

            try {
                const { lat, lon, cityStateCountry } = await getCoordinates(city);
                const weatherData = await getWeather(lat, lon);

                setWeather({
                    
                    city: cityStateCountry,
                    temperature: weatherData.temperature,
                    condition: weatherData.condition,
                    conditionImageURL: weatherData.conditionImageURL,
                    
                });
            } catch (error) {

                setError(error.message);
                setIsError(true);

            } finally {

                setLoading(false);

            }
        };

        if (city) {
            
            fetchWeather();
            setIsError(false);

        }

    },[city]);

    return { weather, loading, error, isError };

};

export default useWeather;