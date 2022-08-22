import React, { useState ,useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Add(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const movname=useRef()
  const movimg=useRef()
  const movrate=useRef()
  
  const addMovie =() =>{
    props.setMovie([...props.movies,{name:movname.current.value,image:movimg.current.value,rate:movrate.current.value}])
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <input type={"text"} placeholder="movie name" ref={movname}></input>
           <input type={"text"} placeholder="movie Image" ref={movimg}></input>
           <input type={"text"} placeholder="movie rate" ref={movrate}></input>

           
           
           </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add