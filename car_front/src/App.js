import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [cars, setCars] = useState(null)
 // const fetchData = async () => {
 //   const response = await axios.get('/api/v1/cars');
    
 //   setCars(response.data[0]) 
 //   console.log(cars)


 useEffect(() => {
  fetch('/api/v1/cars')
  .then((response) => response.json())
  .then(data => {
      setCars(data);
  });
 }, [2000])
  return (
    <div className="App">
     <div className="cars">
        {cars &&
          cars.map((car, index) => {
            return (
              <div className="car" key={index}>
                <h3>Car {index + 1}</h3>
                <h2>{car.company}</h2>

                <div className="details">
                  <p>Model: {car.model}</p>
                  <p>Year: {car.year} </p>
                  <p>Color: {car.color}</p>
                  <p>Cost: {car.cost}</p>
            <p>Miles:{car.miles}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
