  
import React from 'react'
import { Caro } from '../components/Carousel';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import boatImage from '../assets/random/dog.png';
import Padding from '../components/Padding/';

export const Pictures = () => (
  <>
    <Padding />
        <h2>PICTURES</h2>
      <Caro />


      <CardDeck>
      <Card>
        <Card.Img variant="top" src={ boatImage } />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis interdum ornare. Etiam semper aliquet aliquam. Nam ultrices finibus nunc, at semper lectus iaculis ut.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ boatImage } />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ boatImage } />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  </>
)