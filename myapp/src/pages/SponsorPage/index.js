import React from 'react'
import Padding from '../../components/Padding';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  SponsorRandom,
  Center,
  SponsorInfo
} from './SponsorPageElements';

import boeing from "../../assets/sponsors/boeing.png"
import ospi from "../../assets/sponsors/OSPI_Logo.jpg"
import pinnacle from "../../assets/sponsors/pinnacle.png"
import flow from "../../assets/sponsors/flow.png"
import alaska from "../../assets/sponsors/alaska.jpg"
import thinc from "../../assets/sponsors/thinc.png"
import meme1 from "../../assets/random/meme1.jpg"
import meme2 from "../../assets/random/meme2.jpg"
import doge from "../../assets/random/doge.png"
import dog from "../../assets/random/dog.png"

function Sponsor () {
  const information = [
    {
      imageleft: boeing,
      titleright: 'The Boeing Company',
      descriptionright: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, mauris eu condimentum fringilla, ante ante interdum ex, quis pretium ante erat in sapien. Nunc congue mauris risus. Pellentesque rutrum eros venenatis leo imperdiet aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non pharetra.',
      link1: "https://www.boeing.com/",
      imageright: ospi,
      titleleft: 'Washington State OSPI',
      descriptionleft: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, mauris eu condimentum fringilla, ante ante interdum ex, quis pretium ante erat in sapien. Nunc congue mauris risus. Pellentesque rutrum eros venenatis leo imperdiet aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non pharetra.',
      link2: "https://www.k12.wa.us/",
    },
   {
      imageleft: pinnacle,
      titleright: 'Pinnacle Medical Wellness',
      descriptionright: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, mauris eu condimentum fringilla, ante ante interdum ex, quis pretium ante erat in sapien. Nunc congue mauris risus. Pellentesque rutrum eros venenatis leo imperdiet aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non pharetra.',
      link1: "https://www.pinnacle-pt.com/",
      imageright: flow,
      titleleft: 'Flow International Corporation',
      descriptionleft: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, mauris eu condimentum fringilla, ante ante interdum ex, quis pretium ante erat in sapien. Nunc congue mauris risus. Pellentesque rutrum eros venenatis leo imperdiet aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non pharetra.',
      link2: "https://www.flowwaterjet.com/",
    },
    {
      imageleft: alaska,
      titleright: 'Alaska Airlines',
      descriptionright: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, mauris eu condimentum fringilla, ante ante interdum ex, quis pretium ante erat in sapien. Nunc congue mauris risus. Pellentesque rutrum eros venenatis leo imperdiet aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non pharetra.',
      link1: "https://www.alaskaair.com/",
      imageright: thinc,
      titleleft: 'THiNC',
      descriptionleft: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim, mauris eu condimentum fringilla, ante ante interdum ex, quis pretium ante erat in sapien. Nunc congue mauris risus. Pellentesque rutrum eros venenatis leo imperdiet aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non pharetra.',
      link2: "http://www.thincworldwide.com/",
    },
  ];

  const list = information.map((row, index) => {
    return (
      <>
        <Container key={ index }>
          <SponsorInfo>
            <Row>
              <Col>
                <a href={ row.link1 } id="logo" alt={ row.titleright }>
                  <img src={ row.imageleft } alt=""/> 
                </a>
              </Col>
              <Col>
                <h2>{ row.titleright }</h2>
                <p>{ row.descriptionright }</p>
                <a href={ row.link1 } id="logo" alt={ row.titleright }>
                  <Button variant="primary">VISIT SITE</Button>
                </a>
              </Col>
            </Row>
            <hr className="new1" />
          </SponsorInfo>
          <SponsorInfo>
            <Row>
              <Col>
                <h2>{ row.titleleft }</h2>
                <p>{ row.descriptionleft }</p>
                <a href={ row.link2 } id="logo" alt={ row.titleleft }>
                  <Button variant="primary">VISIT SITE</Button>
                </a>
              </Col>              
              <Col>
                <a href={ row.link2 } id="logo" alt={ row.titleleft }>
                  <img src={ row.imageright } alt=""/> 
                </a>
              </Col>
            </Row>
            <hr className="new1" />
          </SponsorInfo>
        </Container>
      </>
    );
  });

  return (
  <>
  <Padding />
    <Center>
      <h2>Thank you to all of our sponsors!</h2>
      <p>
        Our team would not be able to compete if it weren't for our great sponsors. If you would like to help contribute to our team, please consider being a sponsor. Our goal this year is to raise between $15,000 - $20,000. We are a 501(C)3 non profit organization so if you need a tax deductible receipt, that can be arranged. Please click on the contact button above to contact us for more information.
      </p>
      <hr />
    </Center>
    {list}
    <SponsorRandom>
      <h2>Other Sponsors</h2>
        <a href="https://theuselessweb.com/" id="logo">
          <img src={ meme1 } alt=""/> 
        </a>
        <a href="https://theuselessweb.com/" id="logo">
          <img src={ meme2 } alt=""/> 
        </a> 
        <a href="https://theuselessweb.com/" id="logo">
          <img src={ doge } alt=""/> 
        </a> 
        <a href="https://theuselessweb.com/" id="logo">
          <img src={ dog } alt=""/> 
        </a> 
    </SponsorRandom>
  </>
 );
}

export default Sponsor;