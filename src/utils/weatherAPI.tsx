import wmoCode from './wmo.js';

export const getCoordinates = async(city: string) => {

    const response = await fetch(`https://geocode.maps.co/search?q=${encodeURI(city)}&api_key=66860714bda48887583882tin92f01c`);
    const data = await response.json();

    console.log('lat long API Response: ', data);
    if (data.length === 0) {

        throw new Error('City not found');

    }

    return {

        lat: data[0].lat,
        lon: data[0].lon,

    };

};

export const getWeather = async(lat: number, lon: number) => {

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURI(lat.toString())}&longitude=${encodeURI(lon.toString())}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&past_hours=1&forecast_hours=1`);
    const data = await response.json();

    console.log('city API Response: ', data);

    const weatherCode = data.hourly.weather_code[0];
    const condition = wmoCode[weatherCode];

    return {

        temperature: data.hourly.temperature_2m[0],
        condition: condition,

    }
}