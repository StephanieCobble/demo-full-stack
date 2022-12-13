import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card'

import NavBar from "./MainNav/NavBar.jsx";
import axios from "axios";

const CardItem = () => {

    const [pics, setPics] = useState([]);

    const client_id = "9WZGfUCuR_LYgjZ-8CQJjk2AE0akdVou0MfHW1_jrn4"; // Create an account unsplash tp hey client ID (access key);
    const searchStr = "coffee";
    const urlStr = `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`;

    useEffect(() => {
       const getCards = async () => {
            try {
                let response = await axios.get(`${urlStr}`);
                // let response = await axios.get(`https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=9WZGfUCuR_LYgjZ-8CQJjk2AE0akdVou0MfHW1_jrn4`);
                setPics(response.data.results); // results []
            }catch (error) {
                console.log(error.message);
            }
        };
        getCards();
    }, []); 

    // const url = results[i].urls.thumb;
    // const title = results[i].tags[0].title;
    // const desc = results[i].description;

  return (
    // <NavBar/>
<>
    {pics && pics.map((pic) => (

    <Card key={pic.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pic.urls.thumb} />
      <Card.Body>
        <Card.Title>{pic.tags[0].title}</Card.Title>
        <Card.Text>
        {pic.description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    ))}
    </>
  );
};

export default CardItem;
