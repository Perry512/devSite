import wmoCode from './wmo.js';

export const getCoordinates = async(city: string) => {

    const response = await fetch(`https://geocode.maps.co/search?q=${encodeURI(city)}&api_key=66860714bda48887583882tin92f01c`);
    const data = await response.json();

    console.log('lat long API Response: ', data);
    if (data.length === 0) {

        throw new Error('City not found');

    }

    const cityName = data[0].display_name;
    const parts = cityName.split(',').map(part => part.trim());
    const filteredParts = parts.filter((_, index) => index !== 1);
    const cityStateCountry = filteredParts.join(', ');

    return {

        lat: data[0].lat,
        lon: data[0].lon,
        cityStateCountry,
        
    };

};

export const getWeather = async(lat: number, lon: number) => {

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURI(lat.toString())}&longitude=${encodeURI(lon.toString())}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&past_hours=1&forecast_hours=1`);
    const data = await response.json();

    // console.log('city API Response: ', data);

    const weatherCode = data.hourly.weather_code[0];
    const conditionDirty = wmoCode[weatherCode];

    // console.log(conditionDirty);

    const condition = conditionDirty[0];
    const conditionImageCode = conditionDirty[1];

    const conditionImageResponse = await fetch(`https://openweathermap.org/img/w/${encodeURI(conditionImageCode.toString())}.png`);
    const conditionImageBlob = await conditionImageResponse.blob();
    const conditionImageURL = URL.createObjectURL(conditionImageBlob);
    // console.log(conditionImageResponse);


    return {

        temperature: data.hourly.temperature_2m[0],
        condition: condition,
        conditionImageURL: conditionImageURL,

    }
}