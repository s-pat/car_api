import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "../assets/AddCars.css"
export const AddCars = () => {

  //const data = { username: 'example' };

/* fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
 */
  const [show, setShow] = useState(false);
  const [formData, updateFormData] = useState(null);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    //handleClose()
  fetch('http://localhost:5000/api/v1/cars', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  //handleClose()
})
.catch((error) => {
  console.error('Error:', error);
});
  };
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
       <Button className='mt-2'variant="primary" onClick={handleShow}>
        Add Car
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Car to the Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container">
        <Form>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control name="company" type="text" placeholder="Enter Company" onChange={handleChange}/>
    <Form.Control name="model" type="text" placeholder="Enter Modal" onChange={handleChange}/>
    <Form.Control name="year" type="text" placeholder="Enter Year" onChange={handleChange}/>
    <Form.Control name="color" type="text" placeholder="Enter Color" onChange={handleChange}/> 
    <Form.Control name="miles" type="text" placeholder="Enter Miles" onChange={handleChange}/>
    <Form.Control name="cost" type="text" placeholder="Enter Selling Price" onChange={handleChange}/>
  </Form.Group>

</Form>
</div>
</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit} >
            Submit
          </Button>
        </Modal.Footer>
        
      </Modal>
</>
    )
}
