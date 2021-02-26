import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "../styles/styles.scss"
import boatImage from '../assets/random/dog.png';
import win19 from '../assets/2019win.jpg';


export const Caro = () => (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={boatImage}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={win19}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)