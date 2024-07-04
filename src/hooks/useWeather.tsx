import { useState, useEffect } from 'react';
 import { getCoordinates, getWeather } from '../utils/weatherAPI.tsx';

const useWeather = (city) => {
    const [weather, setWeather] = useState<{ city: string; temperature: number; condition: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);

            try {
                const { lat, lon } = await getCoordinates(city);
                const weatherData = await getWeather(lat, lon);
                setWeather({
                    city,
                    temperature: weatherData.temperature,
                    condition: weatherData.condition,
                });
            } catch (error) {
                setError(error.message);

            } finally {

                setLoading(false);

            }
        };

        if (city) {

            fetchWeather();

        }

    },[city]);

    return { weather, loading, error };

};

export default useWeather;