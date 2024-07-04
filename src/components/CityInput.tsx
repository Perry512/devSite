import React, { useState } from "react";


const CityInput = ({ onCitySubmit }) => {

    const [city, setCity ] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();        
        const sanitizedCity = city.replace(/[^a-zA-Z ]/g, "");
        onCitySubmit(sanitizedCity);

    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
            />
            <button type="submit"> Get Weather </button>
        </form>
    );
};

export default CityInput;