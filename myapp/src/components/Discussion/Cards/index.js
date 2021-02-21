import React from 'react';
import Card from 'react-bootstrap/Card'
import {
  CardHoover,
  UpdateText,
  DescriptionText
} from './CardElements';

const Cards = () => {
  return (
    <>
      <CardHoover>
        <Card.Body>
          <Card.Title>📢Announcements</Card.Title>
          <DescriptionText>
            Announcements/FAQs/Logistics
          </DescriptionText>
          <UpdateText>
            <p>🧵 2 Threads</p>
            <p>💬 5 Posts</p>
          </UpdateText>
        </Card.Body>
      </CardHoover>
      <CardHoover>
        <Card.Body>
          <Card.Title>✒️General</Card.Title>
          <DescriptionText>
            General logisitics about the team and other information.
          </DescriptionText>
          <UpdateText>
            <p>🧵 2 Threads</p>
            <p>💬 5 Posts</p>
          </UpdateText>
        </Card.Body>
      </CardHoover>
      <CardHoover>
        <Card.Body>
          <Card.Title>🤖Robot</Card.Title>
          <DescriptionText>
            General discussion about the robots.
          </DescriptionText>
          <UpdateText>
            <p>🧵 2 Threads</p>
            <p>💬 5 Posts</p>
          </UpdateText>
        </Card.Body>
      </CardHoover>
      <CardHoover>
        <Card.Body>
          <Card.Title>⚔️Competition</Card.Title>
          <DescriptionText>
            Talk about the competition here.
          </DescriptionText>
          <UpdateText>
            <p>🧵 2 Threads</p>
            <p>💬 5 Posts</p>
          </UpdateText>
        </Card.Body>
      </CardHoover>
    </>
  )
}

export default Cards