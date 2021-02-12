import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import "../styles/styles.scss"


export const Jumbotron = () => (
  <Jumbo>
    <h1>Hello, world!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      {/* <Button variant="primary">Learn more</Button> */}
    </p>
  </Jumbo>  
)