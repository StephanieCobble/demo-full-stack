import React, { useState } from "react";
import "./NavBar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import CardItem from "../Card";

// in progress
const NavBar = () => {
const [searchInput, setSearchInput] = useState('');
const client_id = "9WZGfUCuR_LYgjZ-8CQJjk2AE0akdVou0MfHW1_jrn4"; // Create an account unsplash tp hey client ID (access key);
const urlStr = `https://api.unsplash.com/search/photos?query=${searchInput}&per_page=20&client_id=${client_id}`;

useEffect(() => {
  const searchItems = async () => {
       try {
           let response = await axios.get(`${urlStr}`);
           setSearchInput(response.data.results); // results []
       }catch (error) {
           console.log(error.message);
       }
   };
   searchItems();
}, []); 
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // function handleSubmit(e) {
  //       e.preventDefault();
  //       let newCard = {
  //             imgUrl: imgUrl,
  //             title: title,
  //             description: description,
  //       };
  //       setImageUrl(''),
  //       setTitle(''),
  //       setDescription(''),
  // }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Card List Project</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
    <CardItem/>
    </>
  );
};

export default NavBar;
