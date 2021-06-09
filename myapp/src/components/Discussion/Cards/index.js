/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import {
  TitleText,
  DescriptionText,
  NavLink,
  CardElement,
  ThreadTitle,
  DescriptionInfo,
  Delete,
  HR,
} from './CardElements';

function Cards(props) {
  const groupCards = props.groupData.map((group) => {
    const threads = group.threads.map((thread) => (
      <>
        <Card.Body>
          <HR />
          <DescriptionInfo>
            <NavLink to={`discussion/${thread.url}`}>
              <ThreadTitle>
                {thread.name}
              </ThreadTitle>
            </NavLink>
            <DescriptionText>
              {thread.description}
            </DescriptionText>
          </DescriptionInfo>
          <Delete>
            <button
              type="button"
              onClick={() => props.deleteThread({
                groupName: group.groupName,
                threads: [thread],
              })}
            >
              Delete
            </button>
          </Delete>
        </Card.Body>
      </>
    ));

    return (
      <>
        <CardElement>
          <Accordion>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Card.Body>
                <TitleText>
                  {group.groupName}
                </TitleText>
                <DescriptionText>
                  🧵 Number of threads:
                  {' '}
                  {group.threads.length}
                </DescriptionText>
              </Card.Body>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div>
                {threads}
              </div>
            </Accordion.Collapse>
          </Accordion>
        </CardElement>
      </>
    );
  });

  return (
    <>
      {groupCards}
    </>
  );
}

export default Cards;
