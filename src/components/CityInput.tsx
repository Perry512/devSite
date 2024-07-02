import React, { useState } from "react";


const CityInput = ({ onCitySubmit }) => {

    const [city, setCity ] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();        
        e = e.replace(/[^a-zA-Z ]/g, "");
        onCitySubmit(city);

    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
            />
        </form>
    );
};

export default CityInput;