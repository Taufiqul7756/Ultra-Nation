import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const [countires,setCountires]= useState([]);
 
 useEffect(()=> {
   fetch('https://restcountries.com/v3.1/all')
   .then(res => res.json())
   .then(data => setCountires(data))
 },[])
  return (
    <div className="App">
        <h2>Country Loaded: {countires.length}</h2> 
        <ul>
          <li></li>
          
        </ul>
      
    </div>
  );
}

export default App;
