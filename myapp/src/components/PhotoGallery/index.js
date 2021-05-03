import React from 'react';
import { Card, CardColumns, Accordion } from 'react-bootstrap/';
import CardChange from './PhotoGalleryPageElements';

import pic1 from '../../assets/2012win.jpg';
import pic2 from '../../assets/2019win.jpg';
import pic3 from '../../assets/awards.PNG';
import pic4 from '../../assets/fairBooth.jpg';
import pic5 from '../../assets/fairBooth2.jpg';
import pic6 from '../../assets/first-logo.jpg';
import pic7 from '../../assets/girlsGen2017.png';
import pic8 from '../../assets/teamPhoto.jpg';
import pic9 from '../../assets/random/meme2.jpg';
import pic10 from '../../assets/random/doge.png';

function PhotoGallery() {
  const information = [
    {
      id: 1,
      img: pic1,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 2,
      img: pic2,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 3,
      img: pic3,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 4,
      img: pic4,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 5,
      img: pic5,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 6,
      img: pic6,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 7,
      img: pic7,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 8,
      img: pic8,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 9,
      img: pic9,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
    {
      id: 10,
      img: pic10,
      title: 'Title',
      description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
    },
  ];

  const list = information.map((row) => (
    <Accordion>
      <CardChange key={row.id}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Card.Img
            variant="top"
            src={row.img}
          />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card.Title>
              { row.title }
            </Card.Title>
            <Card.Text>
              { row.description }
            </Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </CardChange>
    </Accordion>
  ));

  return (
    <CardColumns>
      {list}
    </CardColumns>
  );
}

export default PhotoGallery;
