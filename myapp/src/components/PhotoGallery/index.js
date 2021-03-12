import React from 'react';
import { Card, CardColumns, Accordion } from 'react-bootstrap/'
import {
    CardChange
  } from './PhotoGalleryPageElements';

import pic1 from '../../assets/2012win.jpg'
import pic2 from "../../assets/2019win.jpg"
import pic3 from "../../assets/awards.PNG"
import pic4 from "../../assets/fairBooth.jpg"
import pic5 from "../../assets/fairBooth2.jpg"
import pic6 from "../../assets/first-logo.jpg"
import pic7 from "../../assets/girlsGen2017.png"
import pic8 from "../../assets/teamPhoto.jpg"
import pic9 from "../../assets/random/meme2.jpg"
import pic10 from "../../assets/random/doge.png"

function PhotoGallery() {
   const information = [
      {
        img: pic1,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
         
        img: pic2,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
         
        img: pic3,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
         
        img: pic4,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
         
        img: pic5,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
         
        img: pic6,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
         
        img: pic7,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
         
        img: pic8,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
         
        img: pic9,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
      {
        img: pic10,
        title: 'Title',
        description: 'Words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis sodales libero, eu vestibulum mauris interdum non. Etiam venenatis, massa a tincidunt pellentesque, ante est.',
      },
   ];

   const list = information.map((row, index) => {
      return (
        <Accordion>
            <CardChange key={ index }>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Card.Img 
                        variant="top" 
                        src={ row.img } />
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
      );
   });

return (
   <>
        <CardColumns>
            {list}
        </CardColumns>
   </>
 );
}

export default PhotoGallery;