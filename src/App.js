import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
import animalData from './Data/Data.json';

function App() {
 const [countries,setCountries]= useState([]);
 const [cart,setCart]= useState([]);
 const [animal,setAnimal]= useState([]);

 useEffect(()=>{
   setAnimal(animalData);
   console.log(animalData);
 },[])

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
 const handleAddCountry =(country)=>{
  const newCart =[...cart, country];
  setCart(newCart);
}
  return (
    <div className="App">
        <h2>Country Loaded: {countries.length}</h2> 
        <h4>Country Added: {cart.length}</h4>
        <Cart cart={cart}></Cart>
        <ul>
          {
            countries.map(country=> <Country handleAddCountry={handleAddCountry} country={country}></Country> )
          }
        </ul>
      
    </div>
  );
}

export default App;
