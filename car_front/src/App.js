import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar  from './components/NavBar'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {AddCars} from './components/AddCars'
import DeleteCar from './components/DeleteCar'
function App() {
  const [cars, setCars] = useState(null)
 // const fetchData = async () => {
 //
 //   const response = await axios.get('/api/v1/cars');
    
 //   setCars(response.data[0]) 
 //   console.log(cars)


 useEffect(() => {
  fetch('/api/v1/cars')
  .then((response) => response.json())
  .then(data => {
      setCars(data);
  });
 }, [cars])
  return (
    <div className="App">
     <NavBar/>
      <AddCars/>
     <Container>
        {cars &&
          cars.map((car, index) => {
            return (
              <Card className="car  m-4" key={index}>
                <Card.Header as="h5"> {index + 1 + '.' +' '+ car.company + ' - ' + car.model}</Card.Header>
                <Card.Body className="details">
                <ListGroup  className="list-group-flush">
    <ListGroup.Item>Year: {car.year}</ListGroup.Item>
    <ListGroup.Item>Color: {car.color}</ListGroup.Item>
    <ListGroup.Item>Cost: {car.cost}</ListGroup.Item>
    <ListGroup.Item>Miles: {car.miles}</ListGroup.Item>
  </ListGroup>
   </Card.Body>
                <Card.Body >
    <ButtonGroup className='float-right'>
    <DeleteCar id={car._id}/>
    <Button variant="warning">Edit</Button>
    </ButtonGroup>
  </Card.Body>
              </Card>
            );
          })}
      </Container>
       
    </div>
  );
}

export default App;
