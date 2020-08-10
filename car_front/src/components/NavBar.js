import React from 'react'
import BootStrapNavBar from 'react-bootstrap/Navbar'
import {AddCars} from '../components/AddCars'
export default function NavBar() {
    return (
        <div>
  <BootStrapNavBar  bg="dark" variant="dark">
    <BootStrapNavBar.Brand href="/">
    
      Car Listings
      
    </BootStrapNavBar.Brand>
 
  </BootStrapNavBar>
 </div>
    )
}
