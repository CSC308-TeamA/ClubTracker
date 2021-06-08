/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import {
  ThreadCard,
  ThreadInfo,
  TitleText,
  DescriptionText,
  NavLink,
} from './CardElements';

function Cards({ groupData, deleteThread }) {
  const groupCards = groupData.map((group) => {
    const threads = group.threads.map((thread) => (
      <>
        <ThreadCard>
          <Card.Body>
            <table>
              <tr>
                <ThreadInfo>
                  <NavLink to={`discussion/${thread.url}`}>
                    <TitleText>
                      {thread.name}
                    </TitleText>
                  </NavLink>
                  <DescriptionText>
                    {thread.description}
                  </DescriptionText>
                </ThreadInfo>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteThread({
                      groupName: group.groupName,
                      threads: [thread],
                    })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          </Card.Body>
        </ThreadCard>
      </>
    ));

    return (
      <>
        <Card>
          <Accordion>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Card.Body>
                <TitleText>
                  {group.groupName}
                </TitleText>
                <DescriptionText>
                  Number of threads:
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
        </Card>
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
