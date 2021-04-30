import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import {
  CardHoover,
  UpdateText,
  DescriptionText,
  NavLink,
} from './CardElements';

function Cards() {
  const information = [
    {
      id: 1,
      route: '/thread',
      title: '📢Announcements',
      description: 'Announcements/FAQs/Logistics',
      threads: '🧵 2 Threads',
      posts: '💬 5 Posts',
      newest: '⏲️Meeting 2/19',
    },
    {
      id: 2,
      route: '/thread',
      title: '✒️General',
      description: 'General logisitics about the team and other information.',
      threads: '🧵 2 Threads',
      posts: '💬 5 Posts',
      newest: '⏲️How To Meme',
    },
    {
      id: 3,
      route: '/thread',
      title: '🤖Robot',
      description: 'General discussion about the robots.',
      threads: '🧵 2 Threads',
      posts: '💬 5 Posts',
      newest: '⏲️Robot Fails',
    },
    {
      id: 4,
      route: '/thread',
      title: '⚔️Competition',
      description: 'Talk about the competition here.',
      threads: '🧵 2 Threads',
      posts: '💬 5 Posts',
      newest: '⏲️Ventura Regional 2021',
    },
  ];

  const list = information.map((row) => (
    <>
      <Accordion>
        <CardHoover key={row.id}>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Card.Body>
              <Card.Title>
                <NavLink to={row.route} activeStyle>
                  { row.title }
                </NavLink>
              </Card.Title>
              <DescriptionText>
                { row.description }
              </DescriptionText>
              <UpdateText>
                <p>{ row.threads }</p>
                <p>{ row.posts }</p>
              </UpdateText>
            </Card.Body>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                <NavLink to={row.route} activeStyle>
                  { row.newest }
                </NavLink>
              </p>
              <p>
                <NavLink to={row.route} activeStyle>
                  { row.newest }
                </NavLink>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </CardHoover>
      </Accordion>
    </>
  ));

  return (
    <>
      {list}
    </>
  );
}

export default Cards;
