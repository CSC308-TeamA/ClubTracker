import React from 'react'
import { Caro } from '../components/Carousel';
import { Jumbotron } from '../components/Jumbotron';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Banner from '../components/Banner/';

export const Home = () => (
  <>
    <Banner />
    <Jumbotron />
    <Caro />
    <div>
      <h2>Hello World</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eros lectus, imperdiet sit amet fermentum sed, sagittis vitae elit. In iaculis urna a leo elementum, in faucibus orci bibendum. Cras ex ipsum, tincidunt eget tortor quis, finibus pellentesque purus. Donec vehicula blandit ante, et molestie arcu molestie nec. Pellentesque vulputate, eros id dignissim dignissim, nibh erat dapibus dui, quis bibendum odio turpis vitae tellus. Proin rutrum dolor sit amet euismod ultrices. Ut semper, libero et faucibus interdum, odio neque lobortis lacus, nec viverra erat odio eget felis. Nulla aliquam blandit pulvinar.</p>
      <p>Nullam commodo est non efficitur maximus. Duis ultrices accumsan sapien, at pharetra lorem sagittis ut. Nulla malesuada dolor ac risus mollis bibendum. Proin ac ex pharetra lacus sagittis dapibus. Etiam condimentum eu enim in viverra. In pretium est aliquet diam cursus bibendum. Aenean in nibh ullamcorper purus aliquet pulvinar vel a urna. Suspendisse potenti. Aenean placerat fermentum tempor. Sed dolor eros, semper at libero eget, ultrices lobortis massa. Fusce odio ipsum, pretium et tincidunt et, tempus ac magna. Sed ac interdum est, id commodo lacus. Ut ullamcorper nibh lorem, eu eleifend lorem cursus in. Etiam ut tortor in neque mattis rhoncus. Morbi blandit eget turpis vitae dapibus. Etiam quis erat porttitor, laoreet dui at, consectetur lacus.</p>
      <p>Phasellus odio sem, pretium in purus ac, ornare blandit ex. Vivamus urna tellus, consectetur eget metus quis, dignissim molestie ex. Aenean efficitur purus nulla, id tincidunt ante sodales sit amet. Donec fringilla tristique arcu, sed vehicula lorem fringilla ac. Vivamus facilisis dui eu tellus ultrices, vel cursus sem pellentesque. Aenean ac felis ut ligula posuere rutrum a eu elit. Vestibulum tempus nibh sit amet est rutrum tincidunt.</p>
    </div>
    <Button variant="warning" size="lg">Learn About Team 4068</Button>{' '}
    <Button variant="warning" size="lg">Join Us</Button>{' '}

    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eros lectus, imperdiet sit amet fermentum sed, sagittis vitae elit. In iaculis urna a leo elementum, in faucibus orci bibendum. Cras ex ipsum, tincidunt eget tortor quis, finibus pellentesque purus. Donec vehicula blandit ante, et molestie arcu molestie nec. Pellentesque vulputate, eros id dignissim dignissim, nibh erat dapibus dui, quis bibendum odio turpis vitae tellus. Proin rutrum dolor sit amet euismod ultrices. Ut semper, libero et faucibus interdum, odio neque lobortis lacus, nec viverra erat odio eget felis. Nulla aliquam blandit pulvinar.</p>
      <p>Nullam commodo est non efficitur maximus. Duis ultrices accumsan sapien, at pharetra lorem sagittis ut. Nulla malesuada dolor ac risus mollis bibendum. Proin ac ex pharetra lacus sagittis dapibus. Etiam condimentum eu enim in viverra. In pretium est aliquet diam cursus bibendum. Aenean in nibh ullamcorper purus aliquet pulvinar vel a urna. Suspendisse potenti. Aenean placerat fermentum tempor. Sed dolor eros, semper at libero eget, ultrices lobortis massa. Fusce odio ipsum, pretium et tincidunt et, tempus ac magna. Sed ac interdum est, id commodo lacus. Ut ullamcorper nibh lorem, eu eleifend lorem cursus in. Etiam ut tortor in neque mattis rhoncus. Morbi blandit eget turpis vitae dapibus. Etiam quis erat porttitor, laoreet dui at, consectetur lacus.</p>
      <p>Phasellus odio sem, pretium in purus ac, ornare blandit ex. Vivamus urna tellus, consectetur eget metus quis, dignissim molestie ex. Aenean efficitur purus nulla, id tincidunt ante sodales sit amet. Donec fringilla tristique arcu, sed vehicula lorem fringilla ac. Vivamus facilisis dui eu tellus ultrices, vel cursus sem pellentesque. Aenean ac felis ut ligula posuere rutrum a eu elit. Vestibulum tempus nibh sit amet est rutrum tincidunt.</p>
    </div>


    <CardDeck>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
       <Button variant="primary">Go somewhere</Button>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
       <Button variant="primary">Go somewhere</Button>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
       <Button variant="primary">Go somewhere</Button>
      </Card.Footer>
    </Card>
  </CardDeck>

  <h2>Hello World</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eros lectus, imperdiet sit amet fermentum sed, sagittis vitae elit. In iaculis urna a leo elementum, in faucibus orci bibendum. Cras ex ipsum, tincidunt eget tortor quis, finibus pellentesque purus. Donec vehicula blandit ante, et molestie arcu molestie nec. Pellentesque vulputate, eros id dignissim dignissim, nibh erat dapibus dui, quis bibendum odio turpis vitae tellus. Proin rutrum dolor sit amet euismod ultrices. Ut semper, libero et faucibus interdum, odio neque lobortis lacus, nec viverra erat odio eget felis. Nulla aliquam blandit pulvinar.</p>
      <p>Nullam commodo est non efficitur maximus. Duis ultrices accumsan sapien, at pharetra lorem sagittis ut. Nulla malesuada dolor ac risus mollis bibendum. Proin ac ex pharetra lacus sagittis dapibus. Etiam condimentum eu enim in viverra. In pretium est aliquet diam cursus bibendum. Aenean in nibh ullamcorper purus aliquet pulvinar vel a urna. Suspendisse potenti. Aenean placerat fermentum tempor. Sed dolor eros, semper at libero eget, ultrices lobortis massa. Fusce odio ipsum, pretium et tincidunt et, tempus ac magna. Sed ac interdum est, id commodo lacus. Ut ullamcorper nibh lorem, eu eleifend lorem cursus in. Etiam ut tortor in neque mattis rhoncus. Morbi blandit eget turpis vitae dapibus. Etiam quis erat porttitor, laoreet dui at, consectetur lacus.</p>
      <p>Phasellus odio sem, pretium in purus ac, ornare blandit ex. Vivamus urna tellus, consectetur eget metus quis, dignissim molestie ex. Aenean efficitur purus nulla, id tincidunt ante sodales sit amet. Donec fringilla tristique arcu, sed vehicula lorem fringilla ac. Vivamus facilisis dui eu tellus ultrices, vel cursus sem pellentesque. Aenean ac felis ut ligula posuere rutrum a eu elit. Vestibulum tempus nibh sit amet est rutrum tincidunt.</p>
  </>
)