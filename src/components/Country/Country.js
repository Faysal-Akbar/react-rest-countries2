import React from 'react';
import "./Country.css"

const Country = (props) => {
    const {name, capital, population, flag} = props.country;
    return (
        <div className = "country">
            <h4>Country Name : {name}</h4>
            <img src={flag} alt="" />
            <h5>Capital : {capital}</h5>
            <h5>Population : {population}</h5>
        </div>
    );
};

export default Country;