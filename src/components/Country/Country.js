import React from 'react';

const Country = (props) => {
    console.log(props);
    const {name, population, capital,flags} = props.country;
    // let testdfdsg = props.country.currencies && props.country.currencies;
    // console.log({testdfdsg});
    const flagStyle = {height:'80px'}
    const countryStyle = {border: '1px solid black',margin: '5px',padding: '1px'}
    const handleAddCountry = props.handleAddCountry;
    
    return (
        <div style={countryStyle}>
            <h4>{name.common}</h4>
            <img style={flagStyle} src={flags.png} alt="Flag" />
            <h6>Capital: {capital}</h6>
            <h6>Population: {population}</h6>
            <h6>Currencies: {}</h6>
            <button onClick={()=>handleAddCountry(props.country)}>Add country</button>
            
        </div>
    );
};

export default Country;