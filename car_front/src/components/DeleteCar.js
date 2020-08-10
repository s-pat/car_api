import React from 'react'
import Button from 'react-bootstrap/Button'

function DeleteCar(props) {
    function handleClick(e) {
        e.preventDefault()
        console.log("Delete Action Clicked for this " + props.id)
        fetch('http://localhost:5000/api/v1/cars/' + props.id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
    
    }
    
    
    return (
        <div>
    
        <Button variant="danger"onClick={handleClick}>Delete</Button>
        </div>
    )
}

export default DeleteCar
