import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const [countries,setCountries]= useState([]);

 useEffect(()=> {
   fetch('https://restcountries.com/v3.1/all')
   .then(res => res.json())
   .then(data => {
     setCountries(data);
     console.log(data);
    //  const names = data.map(country=> country.name.common);
    //  console.log(names);
    })
   .catch(err => console.log(err))
 },[])
  return (
    <div className="App">
        <h2>Country Loaded: {countries.length}</h2> 
        <ul>
          {
            countries.map(country=> <li>{country.name.common}</li>)
          }
        </ul>
      
    </div>
  );
}

export default App;
