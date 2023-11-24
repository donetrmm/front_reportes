import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Card.css';
import Algo from '../../../db/db';

function Cards() {
  return (
    <>
      {Algo.Data.map((Data, index) => {
        return (
          <Card key={index} className='card-primary'>
            <Card.Img variant="top" src={Data.img} className='img-card'/>
            <Card.Body className='d-flex flex-column align-items-center'>
              <Card.Text className='text text-center'>{Data.Salon}</Card.Text>
              <Button variant="primary">{Data.Boton}</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Cards;
