import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1 className = "text-info mt-4 mb-4">Total Rest Countries</h1>
            <div className = "countries-container">
            {
                countries.map(country => <Country
                    key = {country.name}
                    country = {country}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;